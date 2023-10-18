import React, { useMemo } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Pagination from "@aroundhome/around-kit/components/Pagination/Pagination";
import useMediaContext from "@Shared/stores/MediaContext/hooks/useMediaContext";
import PartnersFilter from "@Modules/PartnersFilter/PartnersFilter";
import getCanonical from "@Helpers/getCanonical";
import getPagePathname from "./helpers/getPagePathname";
import PartnersListingHeader from "./components/PartnersListingHeader";
import PartnerCards from "./components/PartnerCards";
import NoPartners from "./components/NoPartners";
import PartnerCardsInfiniteScroll from "./components/PartnerCardsInfiniteScroll";
import DynamicLinks from "./components/DynamicLinks";
import PaginationItemComponent from "./components/PaginationItemComponent";
import { PartnersListingProps } from "./PartnersListing.d";
import { PAGE_LIMIT } from "./PartnersListing.constants";
import {
  PartnersListingContainer,
  PartnersListingBox,
  paginationFooterStyle,
} from "./PartnersListing.styles";

const PartnersListing = ({
  profiles = [],
  totalCount,
  products,
  currentPage,
  dynamicLinks,
  loading,
}: PartnersListingProps) => {
  const { isDesktop } = useMediaContext();
  const totalPages = Math.ceil(totalCount / PAGE_LIMIT);
  const hasMorePages = currentPage < totalPages;
  const router = useRouter();

  const preConnects = useMemo(() => {
    const { baseURL } = getCanonical(router.asPath, true);
    return Array.from({ length: totalPages }, (_, i) => i + 1).map(
      (page) =>
        page !== currentPage && (
          <link
            rel="preconnect"
            key={`${baseURL}${page}`}
            href={`${baseURL}${page}/`.replace(/all\/1\/$|1\/$/, "")}
          />
        ),
    );
  }, [totalPages]);

  const handlePageChange = (page: number, event: React.MouseEvent) => {
    event.preventDefault();
    router.push(getPagePathname(router, page));
  };

  return (
    <>
      <Head>
        {preConnects}
        {profiles.length === 0 && (
          <meta name="robots" content="noindex,nofollow" />
        )}
      </Head>
      <PartnersListingContainer>
        <PartnersFilter products={products} />
        <PartnersListingHeader
          pageLimit={PAGE_LIMIT}
          selectedPage={currentPage}
          totalCount={totalCount}
        />
        <PartnersListingBox>
          {profiles.length > 0 ? (
            <>
              {isDesktop ? (
                <Pagination
                  pages={totalPages}
                  currentPage={currentPage}
                  onPageChange={handlePageChange}
                  totalCount={totalCount}
                  hasHeader={false}
                  footerProps={paginationFooterStyle}
                  paginationItemComponent={PaginationItemComponent}
                >
                  <PartnerCards profiles={profiles} />
                </Pagination>
              ) : (
                <PartnerCardsInfiniteScroll
                  profiles={profiles}
                  hasMorePages={hasMorePages}
                  currentPage={currentPage}
                />
              )}
            </>
          ) : (
            <NoPartners />
          )}
        </PartnersListingBox>
        <DynamicLinks dynamicLinks={dynamicLinks} loading={loading} />
      </PartnersListingContainer>
    </>
  );
};

export default PartnersListing;
