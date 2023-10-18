import { GET_PROFILE_CITIES_BY_PRODUCT } from "@Shared/requests/queries/profileCities";
import { ProfileCitiesQueryByProductProps } from "./getProfileCitiesQuery.d";

const buildProfileCitiesQueryByProduct = ({
  productVariable,
}: ProfileCitiesQueryByProductProps) => ({
  query: GET_PROFILE_CITIES_BY_PRODUCT,
  variables: {
    products: [productVariable],
  },
});

export default buildProfileCitiesQueryByProduct;
