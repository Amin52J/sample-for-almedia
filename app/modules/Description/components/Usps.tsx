import React from "react";
import CheckMark from "@aroundhome/around-kit/icons/CheckMark";
import {
  AdvantageText,
  IconInnerWrapper,
  PartnerAdvantage,
  PartnerUspsContainer,
  IconContainer,
} from "@Modules/Description/styles";

export default function Usps({ usps }) {
  if (usps.length < 1) {
    return null;
  }

  return (
    <PartnerUspsContainer>
      {usps.map((usp: string) => (
        <PartnerAdvantage key={usp}>
          <IconContainer>
            <IconInnerWrapper>
              <CheckMark width="7px" height="5px" />
            </IconInnerWrapper>
          </IconContainer>
          <AdvantageText>{usp}</AdvantageText>
        </PartnerAdvantage>
      ))}
    </PartnerUspsContainer>
  );
}
