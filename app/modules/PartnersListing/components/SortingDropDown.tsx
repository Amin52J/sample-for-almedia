import React from "react";
import {
  PartnerSortingChecked,
  SortingListContainer,
  SortingListItem,
  SortingListItemText,
  SortingListTitle,
} from "@Modules/PartnersListing/PartnersListing.styles";
import { SortingOptionProps } from "@Modules/PartnersListing/PartnersListing.d";
import useSort from "@Modules/PartnersListing/hooks/useSort";

const SortingDropDown = ({
  setSelectedSorting,
  selectedSorting,
  sortingOptions,
}) => {
  const { onSortOrderChange } = useSort();

  const selectSorting = (
    _e: React.MouseEvent<Element, MouseEvent>,
    option: SortingOptionProps,
  ) => {
    setSelectedSorting(option);
    onSortOrderChange(option.value);
  };

  const isChecked = (option: SortingOptionProps) => selectedSorting === option;

  return (
    <SortingListContainer>
      <SortingListTitle>SORTIEREN</SortingListTitle>
      {sortingOptions.map((option: SortingOptionProps) => (
        <SortingListItem
          key={option.label}
          isChecked={isChecked(option)}
          onClick={(e: React.MouseEvent<Element, MouseEvent>) =>
            selectSorting(e, option)
          }
        >
          <SortingListItemText>
            {option.label}
            {isChecked(option) && <PartnerSortingChecked />}
          </SortingListItemText>
        </SortingListItem>
      ))}
    </SortingListContainer>
  );
};

export default SortingDropDown;
