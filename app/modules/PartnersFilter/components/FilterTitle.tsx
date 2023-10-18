import React from "react";
import useFilter from "@Modules/PartnersFilter/hooks/useFilter";
import getFiltersTitle from "@Modules/PartnersFilter/helpers/getFiltersTitle";
import {
  FilterTitleContainer,
  FilterTitleText,
} from "@Modules/PartnersFilter/PartnersFilter.styles";

const FilterTitle = () => {
  const { filters } = useFilter();
  const title = getFiltersTitle(filters);

  return (
    <FilterTitleContainer>
      <FilterTitleText>{title}</FilterTitleText>
    </FilterTitleContainer>
  );
};

export default FilterTitle;
