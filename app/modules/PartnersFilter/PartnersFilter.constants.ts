import {
  DEFAULT_ALL_VALUE,
  DEFAULT_PRODUCT_VALUE,
} from "@Modules/PartnersListing/PartnersListing.constants";
import {
  RadiusProps,
  PartnersFilterItem,
  GeoLocationProps,
} from "./PartnersFilter.d";

export const DEFAULT_FILTERS: PartnersFilterItem[] = [
  { label: "product", value: DEFAULT_PRODUCT_VALUE },
  { label: "location", value: DEFAULT_ALL_VALUE },
];

export const DEFAULT_FILTER_PLACEHOLDER: PartnersFilterItem[] = [
  { label: "product", value: "Fachfirmen" },
  { label: "location", value: "Deutschland" },
];

export const RADIUS_ARRAY: RadiusProps[] = [
  {
    label: "10km",
    value: 10,
  },
  {
    label: "25km",
    value: 25,
  },
  {
    label: "50km",
    value: 50,
  },
  {
    label: "100km",
    value: 100,
  },
];

export const DEFAULT_COUNTRY = "Germany";

export const DEFAULT_GEO_LOCATION: GeoLocationProps = {
  location: DEFAULT_ALL_VALUE,
  latitude: null,
  longitude: null,
  radiusInKm: 100,
};
