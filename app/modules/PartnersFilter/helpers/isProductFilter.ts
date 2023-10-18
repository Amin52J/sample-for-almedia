import { PartnersFilterItem } from "@Modules/PartnersFilter/PartnersFilter.d";

const isProductFilter = (filterItem: PartnersFilterItem): boolean =>
  !!(filterItem?.label === "product");

export default isProductFilter;
