import React from "react";
import { DEFAULT_ALL_VALUE } from "@Modules/PartnersListing/PartnersListing.constants";
import FilterButton from "@Shared/components/FilterButton/FilterButton";
// import DropDown from "@Shared/components/DropDown";
import useFilter from "@Modules/PartnersFilter/hooks/useFilter";
// import ProductsFilterSelect from "./ProductsFilterSelect";

const ProductsFilter = ({ products }) => {
  const { productState } = useFilter();

  const isSelected = productState !== DEFAULT_ALL_VALUE;
  const buttonTitle = isSelected ? productState : "Produkt";

  // TODO: It's for KR 1.2 and should be uncommented after starting to work on KR 1.4 (having 3 categories)
  return (
    <FilterButton title={buttonTitle} isSelected={isSelected} isDisabled />
    /* <DropDown
      body={<ProductsFilterSelect products={products} />}
      position="left"
      header="Produkt"
      openButton={<FilterButton title={buttonTitle} isSelected={isSelected} isDisabled/>}
    /> */
  );
};

export default ProductsFilter;
