import { gql } from "@apollo/client";

const GET_PROFILE = gql`
  query GetProfile($slug: String!) {
    profile(slug: $slug, active: true) {
      companyName
      website
      phone
      email
      description
      city
      street
      zipcode
      contactEmail
      contactMobile
      contactPerson
      contactImageUrl {
        default
      }
      logoUrl {
        default
      }
      products {
        name
      }
      slugs
      usps
      vendorUuid
      hideRatingComments
      referenceImages {
        imageUrls
      }
      awardImages {
        imageUrls
      }
    }
  }
`;

export const GET_ALL_PROFILES = gql`
  query GetProfiles {
    profiles {
      nodes {
        slug
        slugs
        active
      }
    }
  }
`;

export default GET_PROFILE;
