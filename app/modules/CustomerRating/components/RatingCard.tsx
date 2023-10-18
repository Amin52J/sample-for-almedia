import React, { useEffect, useState, useRef } from "react";
import {
  RatingCardContainer,
  RatingCardHeader,
  RatingScore,
  RatingDate,
  RatingCustomerCity,
  RatingCustomerName,
  RatingCustomerInfo,
  RatingCardComment,
  TruncatedComment,
  CommentText,
  ToggleComment,
} from "@App/modules/CustomerRating/styles";
import formatDate from "@Helpers/getLocalDate";
import getLocalRatingScore from "@Helpers/getLocalRatingScore";
import isAnonymized from "@Helpers/isAnonymized";
import RatingStars from "@Shared/components/RatingStars/RatingStars";

const RatingCard = ({ rating }) => {
  const {
    average,
    comment,
    createdAt,
    customer: { firstName, lastName, city },
  } = rating;

  const [lineClamp, setLineClamp] = useState(true);
  const [isTruncated, setIsTruncated] = useState(false);
  const commentRef = useRef(null);

  useEffect(() => {
    if (commentRef.current) {
      setIsTruncated(
        commentRef.current.offsetHeight < commentRef.current.scrollHeight,
      );
    }
  }, [commentRef]);

  const toggleMore = () => {
    setLineClamp(!lineClamp);
  };

  return (
    <RatingCardContainer>
      <RatingCardHeader>
        <RatingStars size="sm" average={average} />
        <RatingScore>
          {getLocalRatingScore(Math.round(+average * 10) / 10)}
        </RatingScore>
        <RatingCustomerInfo>
          <RatingDate>{formatDate(createdAt)}</RatingDate>
          <span>&#44;&#160;</span>
          <RatingCustomerName>
            {isAnonymized(lastName)
              ? "anonym"
              : `${firstName} ${lastName.charAt(0).toUpperCase()}.`}
          </RatingCustomerName>
          <RatingCustomerCity>
            {isAnonymized(city) ? "" : `\u00A0aus ${city}`}
          </RatingCustomerCity>
        </RatingCustomerInfo>
      </RatingCardHeader>
      {comment && (
        <RatingCardComment>
          <TruncatedComment>
            <CommentText ref={commentRef} lineClamp={lineClamp}>
              {comment}
            </CommentText>
            {isTruncated && (
              <ToggleComment onClick={toggleMore}>
                {lineClamp ? "Mehr anzeigen" : "Weniger anzeigen"}
              </ToggleComment>
            )}
          </TruncatedComment>
        </RatingCardComment>
      )}
    </RatingCardContainer>
  );
};

export default RatingCard;
