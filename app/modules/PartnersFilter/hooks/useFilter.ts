import { useState } from "react";
import { useRouter } from "next/router";
import {
  FilterLabels,
  PartnersFilterItem,
} from "@Modules/PartnersFilter/PartnersFilter.d";
import { DEFAULT_FILTERS } from "@Modules/PartnersFilter/PartnersFilter.constants";
import { DEFAULT_ALL_VALUE } from "@Modules/PartnersListing/PartnersListing.constants";
import removeFinalAlls from "@Helpers/removeFinalAlls";
import trimPath from "@Helpers/trimPath";
import queryValueToString from "@Helpers/queryValueToString";
import getPageNumber from "@Helpers/getPageNumber";
import getCanonical from "@Helpers/getCanonical";

const useFilter = () => {
  const router = useRouter();
  const [filters, setFilters] = useState<PartnersFilterItem[]>(DEFAULT_FILTERS);
  const locationState = filters.find(
    (filterItem) => filterItem.label === "location",
  )?.value;
  const productState = filters.find(
    (filterItem) => filterItem.label === "product",
  )?.value;

  const makeNewRoute = (newFilters: PartnersFilterItem[], page: number) => {
    const values = removeFinalAlls(
      newFilters.map((filterItem) => filterItem.value),
      page,
    );
    const url = values.length
      ? trimPath(`/${values.map((value) => value).join("/")}/`)
      : undefined;
    const { baseURL } = getCanonical(router.asPath, false);

    return url === baseURL && page !== 1
      ? getCanonical(`${url}${page}`, false).canonical
      : url;
  };

  const updateRoute = (newFilters: PartnersFilterItem[]) => {
    const page = getPageNumber(router?.query?.page);
    const url = makeNewRoute(newFilters, page);
    router.push(url);
  };

  const updateFilters = (label: FilterLabels, value: string) => {
    const foundFilterIndex = filters.findIndex(
      (filterItem) => filterItem.label === label,
    );
    const newFilters = [...filters];
    newFilters[foundFilterIndex].value = queryValueToString(value);
    updateRoute(newFilters);
    setFilters(newFilters);
  };

  const getNavigationLink = (label: FilterLabels) => {
    const foundFilterIndex = filters.findIndex(
      (filterItem) => filterItem.label === label,
    );
    const newFilter = filters.map((filterItem, itemIndex) =>
      itemIndex > foundFilterIndex
        ? {
            label: filterItem.label,
            value: DEFAULT_ALL_VALUE,
          }
        : filterItem,
    );
    const url = `${makeNewRoute(newFilter, 1)}`;
    return url;
  };

  const getLastLink = (label: FilterLabels) => {
    const foundFilterIndex = filters.findIndex(
      (filterItem) => filterItem.label === label,
    );
    const newFilter = filters.map((filterItem, itemIndex) =>
      itemIndex >= foundFilterIndex
        ? {
            label: filterItem.label,
            value: DEFAULT_ALL_VALUE,
          }
        : filterItem,
    );
    const url = `${makeNewRoute(newFilter, 1)}`;
    return url;
  };

  return {
    filters,
    locationState,
    productState,
    updateFilters,
    getNavigationLink,
    getLastLink,
  };
};

export default useFilter;
