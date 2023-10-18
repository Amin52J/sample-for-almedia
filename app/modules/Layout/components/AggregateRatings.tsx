import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import RatingsText from "@Modules/Layout/components/RatingsText";
import RatingStars from "@Shared/components/RatingStars";
import useGAContext from "@Shared/stores/GAContext/hooks/useGAContext";
import { Profile } from "@Shared/types/profile";
import { VendorAverage } from "@Shared/types/rating";
import {
  AggregateRatingsContainer,
  AggregateRatingsText,
  AggregateRatingsLink,
  Tag,
} from "@Modules/Layout/Layout.styles";

interface AggregateRatingsProps {
  vendorAverage: VendorAverage;
  hideRatingComments: boolean;
  profile: Profile;
}

const AggregateRatings = ({
  vendorAverage,
  hideRatingComments,
  profile,
}: AggregateRatingsProps) => {
  const { average, count } = vendorAverage;
  const { vendorUuid } = profile;
  const {
    query: { slug },
  } = useRouter();

  const { sendAggregateRatingsLinkEvent } = useGAContext(vendorUuid, slug);

  return (
    <AggregateRatingsContainer>
      {count < 1 ? (
        <Tag>Neu bei Aroundhome</Tag>
      ) : (
        <Link href={`/firma/${slug}/ratings`} passHref>
          <AggregateRatingsLink
            hideRatingComments={hideRatingComments}
            onClick={sendAggregateRatingsLinkEvent}
          >
            <RatingStars average={average} size="sm" />
            <AggregateRatingsText>
              ({count}
              <RatingsText />)
            </AggregateRatingsText>
          </AggregateRatingsLink>
        </Link>
      )}
    </AggregateRatingsContainer>
  );
};

export default AggregateRatings;
