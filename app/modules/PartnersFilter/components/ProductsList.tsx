import React from "react";
import Link from "next/link";
import Radio from "@aroundhome/around-kit/components/Radio";
import {
  Product,
  ProductsListProps,
} from "@Modules/PartnersListing/PartnersListing.d";
import {
  ListContainer,
  RadioGroupStyles,
  RadioStyles,
} from "@Modules/PartnersFilter/PartnersFilter.styles";
import useFilter from "@Modules/PartnersFilter/hooks/useFilter";
import Divider from "@Shared/components/Divider";
import trimPath from "@Helpers/trimPath";

const ProductsList = ({ products }: ProductsListProps) => {
  const { updateFilters, productState } = useFilter();

  const updateProduct = (value: string) => {
    updateFilters("product", value);
  };

  return (
    <ListContainer>
      <RadioGroupStyles
        name="productList"
        label="Alle Produkte"
        onChange={updateProduct}
        value={productState}
      >
        {products?.map((item: Product, index: number) => {
          const url = trimPath(
            `${process.env.NEXT_PUBLIC_BASE_PATH}/${item.name}/`,
          );
          return (
            <div key={item.name}>
              <Radio value={item.name}>
                <Link href={url} passHref>
                  <RadioStyles>{item.name}</RadioStyles>
                </Link>
              </Radio>
              {index + 1 < products.length && <Divider spacing={1} />}
            </div>
          );
        })}
      </RadioGroupStyles>
    </ListContainer>
  );
};

export default ProductsList;
