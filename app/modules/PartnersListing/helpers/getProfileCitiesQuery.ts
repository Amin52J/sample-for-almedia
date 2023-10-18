import { GET_ALL_PROFILE_CITIES } from "@Shared/requests/queries/profileCities";
import toCapital from "@Helpers/toCapital";
import { DEFAULT_ALL_VALUE } from "@Modules/PartnersListing/PartnersListing.constants";
import { ProfileCitiesQueryProps } from "./getProfileCitiesQuery.d";
import buildProfileCitiesQueryByAll from "./buildProfileCitiesQueryByAll";
import buildProfileCitiesQueryByLocation from "./buildProfileCitiesQueryByLocation";
import buildProfileCitiesQueryByProduct from "./buildProfileCitiesQueryByProduct";

const getProfileCitiesQuery = ({
  product,
  location,
  latitude,
  longitude,
  radiusInKm,
}: ProfileCitiesQueryProps) => {
  const hasValidLocation =
    location !== DEFAULT_ALL_VALUE && latitude && longitude && radiusInKm;
  const hasValidProduct = product !== DEFAULT_ALL_VALUE;

  let queryProps = {
    query: GET_ALL_PROFILE_CITIES,
    variables: {},
  };

  const productVariable =
    product === DEFAULT_ALL_VALUE || typeof product !== "string"
      ? null
      : toCapital(product);

  if (hasValidProduct && hasValidLocation) {
    queryProps = buildProfileCitiesQueryByAll({
      latitude,
      longitude,
      radiusInKm,
      productVariable,
    });
  } else if (!hasValidProduct && hasValidLocation) {
    queryProps = buildProfileCitiesQueryByLocation({
      latitude,
      longitude,
      radiusInKm,
    });
  } else if (hasValidProduct) {
    queryProps = buildProfileCitiesQueryByProduct({ productVariable });
  }

  return queryProps;
};

export default getProfileCitiesQuery;
