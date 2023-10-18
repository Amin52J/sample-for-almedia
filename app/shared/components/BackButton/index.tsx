import React from "react";
import ChevronLeft from "@aroundhome/around-kit/icons/ChevronLeft";
import {
  BackButtonText,
  BackButtonContainer,
} from "@Shared/components/BackButton/styles";
import { BackButtonProps } from "@Shared/components/BackButton/types";

const BackButton = ({ productRequestId, isInline }: BackButtonProps) => {
  return (
    <BackButtonContainer
      isInline={isInline}
      href={`${process.env.NEXT_PUBLIC_CUSTOMER_LOGIN_BASE}/product-requests/${productRequestId}/companies`}
    >
      <ChevronLeft width="2rem" />
      <BackButtonText>Zurück</BackButtonText>
    </BackButtonContainer>
  );
};

export default BackButton;
