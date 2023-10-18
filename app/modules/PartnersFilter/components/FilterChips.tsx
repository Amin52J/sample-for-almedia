import React from "react";
import useMediaContext from "@Shared/stores/MediaContext/hooks/useMediaContext";
import {
  FilterChipsContainer,
  FilterChipsTitle,
} from "@Modules/PartnersFilter/PartnersFilter.styles";
import useFilter from "@Modules/PartnersFilter/hooks/useFilter";
import { DEFAULT_ALL_VALUE } from "@Modules/PartnersListing/PartnersListing.constants";
import FilterChipItem from "./FilterChipItem";

const FilterChips = () => {
  const { filters } = useFilter();
  const { isDesktop } = useMediaContext();
  const filterChipsItems = filters.filter(
    (filterItem) => filterItem.value !== DEFAULT_ALL_VALUE,
  );

  return filters.every(
    (filterItem) => filterItem.value === DEFAULT_ALL_VALUE,
  ) ? null : (
    <FilterChipsContainer>
      {isDesktop && <FilterChipsTitle>Filter:</FilterChipsTitle>}
      {filterChipsItems.map((filterItem) => (
        <FilterChipItem
          filterItem={filterItem}
          key={`chip_item_${filterItem.value}`}
        />
      ))}
    </FilterChipsContainer>
  );
};

export default FilterChips;
