import { gql } from "@apollo/client";

const GET_RATING = gql`
  query GetRating($vendorUuids: [String!], $vendorUuid: String!, $page: Int) {
    ratingConnection(vendorUuids: $vendorUuids) {
      totalCount
      nodes(perPage: 5, page: $page) {
        average
        comment
        customer {
          city
          lastName
          firstName
        }
        createdAt
      }
    }
    vendorAverage(vendorUuid: $vendorUuid) {
      average
      count
    }
  }
`;

export const GET_VENDOR_AVERAGE = gql`
  query GetVendorAverage($vendorUuid: String!) {
    vendorAverage(vendorUuid: $vendorUuid) {
      average
      count
    }
  }
`;

export default GET_RATING;
