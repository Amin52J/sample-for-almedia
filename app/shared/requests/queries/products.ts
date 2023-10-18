import { gql } from "@apollo/client";

const GET_PRODUCTS = gql`
  query GetProducts {
    products {
      name
    }
  }
`;

export default GET_PRODUCTS;
