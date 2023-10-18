import { GET_PROFILE_CITIES } from "@Shared/requests/queries/profileCities";
import { ProfileCitiesQueryByAllProps } from "./getProfileCitiesQuery.d";

const buildProfileCitiesQueryByAll = ({
  latitude,
  longitude,
  radiusInKm,
  productVariable,
}: ProfileCitiesQueryByAllProps) => ({
  query: GET_PROFILE_CITIES,
  variables: {
    products: [productVariable],
    latitude,
    longitude,
    radiusInKm,
  },
});

export default buildProfileCitiesQueryByAll;
