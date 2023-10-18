import React from "react";
import getLocalRatingScore from "@Helpers/getLocalRatingScore";
import {
  HeadlineRatingContainer,
  HeadlineRatingTotal,
  HeadlineRatingScore,
} from "@App/modules/CustomerRating/styles";
import { VendorAverage } from "@Shared/types/rating";
import RatingStars from "@Shared/components/RatingStars/RatingStars";

interface PropsI {
  vendorAverage: VendorAverage;
}

const HeadlineRating = ({ vendorAverage: { count, average } }: PropsI) => {
  const localRatingScore = getLocalRatingScore(Math.round(+average * 10) / 10);
  const localMaxScore = getLocalRatingScore(5);
  return (
    average &&
    count && (
      <HeadlineRatingContainer>
        <HeadlineRatingTotal>Gesamt ({count})</HeadlineRatingTotal>
        <RatingStars size="lg" average={average} />
        <HeadlineRatingScore>
          {`${localRatingScore} / ${localMaxScore}`}
        </HeadlineRatingScore>
      </HeadlineRatingContainer>
    )
  );
};

export default HeadlineRating;
