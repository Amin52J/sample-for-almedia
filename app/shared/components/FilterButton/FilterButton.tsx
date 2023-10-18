import React from "react";
import ChevronDown from "@aroundhome/around-kit/icons/ChevronDown";
import useMediaContext from "@Shared/stores/MediaContext/hooks/useMediaContext";
import { StyledFilterButton, ButtonTitle } from "./FilterButton.styles";
import { FilterButtonProps } from "./FilterButton.d";

const FilterButton = ({ title, isSelected, isDisabled }: FilterButtonProps) => {
  const { isDesktop } = useMediaContext();

  return (
    <StyledFilterButton
      buttonType="secondary"
      component="button"
      color="green"
      size={isDesktop ? "md" : "sm"}
      isSelected={isSelected}
      isDisabled={isDisabled}
    >
      <ButtonTitle>
        <div>{title}</div>
        <ChevronDown width="4rem" height="4rem" />
      </ButtonTitle>
    </StyledFilterButton>
  );
};

export default FilterButton;
