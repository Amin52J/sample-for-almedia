import { SortProps, SortingOptionProps } from "./PartnersListing.d";

export const GOOGLE_API_URL = "https://maps.googleapis.com/maps/api";

export const PAGE_LIMIT = 10;

export const DEFAULT_ALL_VALUE = "all";
// TODO: It's for KR 1.2 and should be removed after starting to work on KR 1.4 (having 3 categories)
export const DEFAULT_PRODUCT_VALUE = "Badezimmer";

// Only shows profiles that are 'active'
export const DEFAULT_PROFILES_STATUS = true;

export const REQUESTS_PER_PAGE = 20;
export const TOTAL_REQUESTS = 50;

export const DEFAULT_SORTING_OPTIONS: SortingOptionProps[] = [
  { label: "Absteigend", value: "DESC" },
  { label: "Aufsteigend", value: "ASC" },
];
export const DEFAULT_SORT: SortProps = {
  sortBy: "RATING",
  sortOrder: "DESC",
};
