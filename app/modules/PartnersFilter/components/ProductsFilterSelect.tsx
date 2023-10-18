import React, { useEffect, useState } from "react";
import { Product } from "@Modules/PartnersListing/PartnersListing.d";
import {
  FilterSelectContainer,
  StyledAutocomplete,
} from "@Modules/PartnersFilter/PartnersFilter.styles";
import ProductsList from "./ProductsList";

const ProductsFilterSelect = ({ products }) => {
  const [value, setValue] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleChange = (newValue: string) => {
    setValue(newValue);
    const newFilteredProducts = products.filter((product: Product) =>
      product?.name.toLowerCase().includes(newValue.toLowerCase()),
    );
    setFilteredProducts(newFilteredProducts);
  };

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
  };

  useEffect(() => {
    setFilteredProducts(products);
  }, [products]);

  const Component = (): JSX.Element => (
    <ProductsList products={filteredProducts} />
  );

  return (
    <FilterSelectContainer>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <StyledAutocomplete
          data={[]}
          value={value}
          label="Produkte suchen"
          onChange={handleChange}
          component={Component}
          clearInputCross={false}
        />
      </form>
    </FilterSelectContainer>
  );
};
export default ProductsFilterSelect;
