import React from "react";
import useFilter from "@Modules/PartnersFilter/hooks/useFilter";
import { DEFAULT_ALL_VALUE } from "@Modules/PartnersListing/PartnersListing.constants";
import { FilterNavigationContainer } from "@Modules/PartnersFilter/PartnersFilter.styles";
import FilterNavigationItem from "./FilterNavigationItem";

const FilterNavigation = () => {
  const { filters } = useFilter();
  const breadcrumbItems = [
    { label: "Alle Fachfirmen", value: "Alle Fachfirmen" },
  ]
    .concat(filters)
    .filter((filterItem) => filterItem.value !== DEFAULT_ALL_VALUE);

  return (
    <FilterNavigationContainer>
      {breadcrumbItems.map((filterItem) => (
        <FilterNavigationItem
          filterItem={filterItem}
          key={`filter_item_${filterItem.value}`}
        />
      ))}
    </FilterNavigationContainer>
  );
};

export default FilterNavigation;
