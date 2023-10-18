import React, { useState, useMemo, useEffect } from "react";
import Anchor from "@aroundhome/around-kit/components/Anchor";
import ChevronDown from "@aroundhome/around-kit/icons/ChevronDown";
import DropDown from "@Shared/components/DropDown";
import {
  PartnerSortingStyles,
  SortingTitle,
} from "@Modules/PartnersListing/PartnersListing.styles";
import { PartnerSortingProps } from "@Modules/PartnersListing/PartnersListing.d";
import { DEFAULT_SORTING_OPTIONS } from "@Modules/PartnersListing/PartnersListing.constants";
import useSort from "@Modules/PartnersListing/hooks/useSort";
import SortingDropDown from "./SortingDropDown";

const PartnerSorting = ({ isDisabled }: PartnerSortingProps) => {
  const {
    sortProps: { sortOrder },
  } = useSort();
  const defaultSortOption = useMemo(
    () =>
      DEFAULT_SORTING_OPTIONS.find(
        (sortOption) => sortOption.value === sortOrder,
      ) || DEFAULT_SORTING_OPTIONS[0],
    [sortOrder],
  );

  const [selectedSorting, setSelectedSorting] = useState(defaultSortOption);

  useEffect(() => {
    setSelectedSorting(defaultSortOption);
  }, [defaultSortOption]);

  return (
    <PartnerSortingStyles>
      <SortingTitle $isDisabled={isDisabled}>
        Sortieren nach:&nbsp;
      </SortingTitle>
      <DropDown
        body={
          <SortingDropDown
            sortingOptions={DEFAULT_SORTING_OPTIONS}
            selectedSorting={selectedSorting}
            setSelectedSorting={setSelectedSorting}
          />
        }
        position="right"
        header="Sortieren"
        isDisabled={isDisabled}
        openButton={
          <Anchor
            isBold
            color="grey"
            size="md"
            iconRight={ChevronDown}
            isDisabled={isDisabled}
          >
            Bewertung
          </Anchor>
        }
      />
    </PartnerSortingStyles>
  );
};

export default PartnerSorting;
