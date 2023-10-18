import { GET_LISTING, GET_ALL_LISTING } from "@Shared/requests/queries/listing";
import toCapital from "@Helpers/toCapital";
import {
  DEFAULT_ALL_VALUE,
  PAGE_LIMIT,
} from "@Modules/PartnersListing/PartnersListing.constants";
import { ProfileQueryProps } from "./getProfilesQuery.d";

const getProfilesQuery = ({
  product,
  location,
  latitude,
  longitude,
  radiusInKm,
  page,
  active,
  sortBy,
  sortOrder,
}: ProfileQueryProps) => {
  let query = GET_LISTING;
  const initialVariables = {
    active,
    page,
    perPage: PAGE_LIMIT,
    sortBy,
    sortOrder,
  };
  let variables = {};

  if (product === DEFAULT_ALL_VALUE && location === DEFAULT_ALL_VALUE) {
    query = GET_ALL_LISTING;
  }
  const productVariable =
    product === DEFAULT_ALL_VALUE || typeof product !== "string"
      ? null
      : toCapital(product);

  if (query === GET_LISTING && productVariable)
    variables = {
      products: [productVariable],
      latitude,
      longitude,
      radiusInKm,
      ...initialVariables,
    };

  if (query === GET_LISTING && !productVariable)
    variables = {
      latitude,
      longitude,
      radiusInKm,
      ...initialVariables,
    };

  return { query, variables };
};

export default getProfilesQuery;
