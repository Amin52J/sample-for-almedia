import { PartnersFilterItem } from "@Modules/PartnersFilter/PartnersFilter.d";

const isLocationFilter = (filterItem: PartnersFilterItem): boolean =>
  !!(filterItem?.label === "location");

export default isLocationFilter;
