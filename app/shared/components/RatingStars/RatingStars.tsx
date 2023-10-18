import React from "react";
import { RatingStarsContainer, Star, StyledRating } from "./RatingStars.styles";

const RatingStars = ({
  average,
  size,
}: {
  average: number;
  size: "sm" | "lg";
}) => {
  const roundedAverage = Math.round(average * 2) / 2;
  return (
    <RatingStarsContainer size={size}>
      <StyledRating
        emptySymbol={
          <Star
            size={size}
            src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/empty_star.svg`}
            alt="empty_star"
          />
        }
        fullSymbol={
          <Star
            size={size}
            src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/full_star.svg`}
            alt="full_star"
          />
        }
        initialRating={roundedAverage}
        readonly
      />
    </RatingStarsContainer>
  );
};

export default RatingStars;
