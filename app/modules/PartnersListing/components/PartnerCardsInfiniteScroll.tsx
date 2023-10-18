import React, { useRef, useCallback, useState, useEffect } from "react";
import { useRouter } from "next/router";
import PartnerCard from "@Modules/PartnerCard";
import Divider from "@Shared/components/Divider";
import getPagePathname from "@Modules/PartnersListing/helpers/getPagePathname";
import { PartnerCardsInfiniteScrollProps } from "@Modules/PartnersListing/PartnersListing.d";
import { PAGE_LIMIT } from "@Modules/PartnersListing/PartnersListing.constants";

const PartnerCardsInfiniteScroll = ({
  profiles,
  hasMorePages,
  currentPage,
}: PartnerCardsInfiniteScrollProps) => {
  const [partners, setPartners] = useState([]);
  const observer = useRef(null);
  const router = useRouter();

  useEffect(() => {
    if (currentPage === 1 || !currentPage) {
      setPartners([...profiles]);
    } else {
      setPartners((prevPartners) => [...prevPartners, ...profiles]);
    }
  }, [profiles, currentPage]);

  const lastPartnerElementRef = useCallback(
    (node) => {
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMorePages) {
          router.push(getPagePathname(router, currentPage + 1), undefined, {
            scroll: false,
          });
        }
      });
      if (node) observer.current.observe(node);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [hasMorePages, currentPage],
  );

  return (
    <>
      {partners?.map((partner, index) =>
        partners.length === index + 5 ? (
          <div key={partner.slug} ref={lastPartnerElementRef}>
            <PartnerCard {...partner} />
            {index + 1 < PAGE_LIMIT && <Divider spacing={2} />}
          </div>
        ) : (
          <div key={partner.slug} ref={null}>
            <PartnerCard {...partner} />
            <Divider spacing={2} />
          </div>
        ),
      )}
    </>
  );
};

export default PartnerCardsInfiniteScroll;
