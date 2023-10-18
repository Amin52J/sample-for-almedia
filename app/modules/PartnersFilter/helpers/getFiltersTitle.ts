import isLocationFilter from "@Modules/PartnersFilter/helpers/isLocationFilter";
import isProductFilter from "@Modules/PartnersFilter/helpers/isProductFilter";
import { DEFAULT_ALL_VALUE } from "@Modules/PartnersListing/PartnersListing.constants";
import { DEFAULT_FILTER_PLACEHOLDER } from "@Modules/PartnersFilter/PartnersFilter.constants";
import { PartnersFilterItem } from "@Modules/PartnersFilter/PartnersFilter.d";

const getFiltersTitle = (filter: PartnersFilterItem[]) => {
  return filter
    .map((item, index) => {
      const itemValue = isProductFilter(filter[index])
        ? `${item.value} Fachfirmen`
        : item.value;
      const title =
        !item.value || item.value === DEFAULT_ALL_VALUE
          ? DEFAULT_FILTER_PLACEHOLDER.find(
              (filterItem) => filterItem.label === item.label,
            ).value
          : itemValue;

      const postfix = isLocationFilter(filter[index + 1]) ? " in " : "";
      return `${title}${postfix}`;
    })
    .join("");
};

export default getFiltersTitle;
