import { Product } from "@Modules/PartnersListing/PartnersListing.d";
import toCapital from "./toCapital";

const isProductValid = (
  product: string | string[],
  products: Product[],
): boolean => {
  // TODO: Also include all for product after KR1.2
  if (typeof product === "string")
    return (
      products.findIndex(
        (productItem) => productItem.name === toCapital(product),
      ) !== -1
    );
  return false;
};

export default isProductValid;
