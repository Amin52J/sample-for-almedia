import { GET_PROFILE_CITIES_BY_LOCATION } from "@Shared/requests/queries/profileCities";
import { ProfileCitiesQueryByLocationProps } from "./getProfileCitiesQuery.d";

const buildProfileCitiesQueryByLocation = ({
  latitude,
  longitude,
  radiusInKm,
}: ProfileCitiesQueryByLocationProps) => ({
  query: GET_PROFILE_CITIES_BY_LOCATION,
  variables: {
    latitude,
    longitude,
    radiusInKm,
  },
});

export default buildProfileCitiesQueryByLocation;
