import { gql } from "@apollo/client";

const LISTING_RESPONSE_MODEL = `
{
  totalCount
  nodes(page: $page, perPage: $perPage) {
    logoUrl {
      default
    }
    companyName
    products {
      name
    }
    description
    slug
    rating
    ratingsCount
    street
    city
    zipcode
    badges
    vendorUuid
    latitude
    longitude
    phone
  }
}
`;

export const GET_LISTING = gql`
  query GetListing(
    $products: [String!]
    $latitude: Float
    $longitude: Float
    $radiusInKm: Int
    $page: Int
    $perPage: Int
    $active: Boolean
    $sortBy: ProfileSort!
    $sortOrder: SortOrderEnum!
  ) {
    profiles(
      products: $products
      latitude: $latitude
      longitude: $longitude
      radiusInKm: $radiusInKm
      active: $active
      sortBy: $sortBy
      sortOrder: $sortOrder
    )
    ${LISTING_RESPONSE_MODEL}
  }
`;

export const GET_ALL_LISTING = gql`
  query GetAllListing(
    $page: Int
    $perPage: Int
    $active: Boolean
    $sortBy: ProfileSort!
    $sortOrder: SortOrderEnum!
  ) {
    profiles(
      active: $active
      sortBy: $sortBy
      sortOrder: $sortOrder
    )
    ${LISTING_RESPONSE_MODEL}
  }
`;
