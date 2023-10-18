import React from "react";
import useMediaContext from "@Shared/stores/MediaContext/hooks/useMediaContext";
import LocationFilter from "./components/LocationFilter";
import FilterNavigation from "./components/FilterNavigation";
import FilterTitle from "./components/FilterTitle";
import FilterChips from "./components/FilterChips";
import {
  FilterDivider,
  FilterContainer,
  FilterSelectors,
  FilterNavMobileWrapper,
} from "./PartnersFilter.styles";

// TODO: KR 1.2 ProductFilter component is gonna be hidden for the MVP since we only have one product.
const PartnerFilters = ({ products }) => {
  const { isDesktop } = useMediaContext();

  return isDesktop ? (
    <FilterContainer>
      <FilterNavigation />
      <FilterTitle />
      <FilterDivider top={2} bottom={3} />
      <FilterSelectors>
        {/* <ProductFilter products={products} /> */}
        <LocationFilter />
      </FilterSelectors>
      <FilterChips />
    </FilterContainer>
  ) : (
    <>
      <FilterContainer>
        <FilterSelectors>
          {/* <ProductFilter products={products} /> */}
          <LocationFilter />
        </FilterSelectors>
        <FilterChips />
      </FilterContainer>
      <FilterNavMobileWrapper>
        <FilterNavigation />
        <FilterTitle />
      </FilterNavMobileWrapper>
    </>
  );
};

export default PartnerFilters;
