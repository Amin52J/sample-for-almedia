import React from "react";
import RatingStars from "@Shared/components/RatingStars/RatingStars";
import { RatingArea, RatingsCountText } from "./Partner.styles";

const Rating = ({ rating, ratingsCount }) => (
  <RatingArea>
    <RatingStars size="lg" average={rating || 0} />
    <RatingsCountText>{`${ratingsCount || 0} Bewertungen`}</RatingsCountText>
  </RatingArea>
);

export default Rating;
