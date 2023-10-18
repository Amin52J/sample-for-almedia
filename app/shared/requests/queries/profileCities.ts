import { gql } from "@apollo/client";

export const GET_PROFILE_CITIES = gql`
  query GetProfileCities(
    $products: [String!]
    $latitude: Float!
    $longitude: Float!
    $radiusInKm: Int!
  ) {
    profileCities(
      products: $products
      latitude: $latitude
      longitude: $longitude
      radiusInKm: $radiusInKm
    )
  }
`;
export const GET_PROFILE_CITIES_BY_PRODUCT = gql`
  query GetProfileCitiesByProduct($products: [String!]) {
    profileCities(products: $products)
  }
`;

export const GET_PROFILE_CITIES_BY_LOCATION = gql`
  query GetProfileCitiesByLocation(
    $latitude: Float!
    $longitude: Float!
    $radiusInKm: Int!
  ) {
    profileCities(
      latitude: $latitude
      longitude: $longitude
      radiusInKm: $radiusInKm
    )
  }
`;

export const GET_ALL_PROFILE_CITIES = gql`
  query GetAllProfileCities {
    profileCities
  }
`;

export default GET_PROFILE_CITIES;
