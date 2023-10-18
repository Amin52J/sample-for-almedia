import { GetStaticProps } from "next";
import createApolloClient from "@Helpers/createApolloClient";
import fetchDynamicLinks from "@Modules/PartnersListing/helpers/fetchDynamicLinks";
import {
  DEFAULT_ALL_VALUE,
  DEFAULT_PRODUCT_VALUE,
  DEFAULT_PROFILES_STATUS,
  DEFAULT_SORT,
} from "@Modules/PartnersListing/PartnersListing.constants";
import { DEFAULT_GEO_LOCATION } from "@Modules/PartnersFilter/PartnersFilter.constants";
import getProfilesQuery from "./getProfilesQuery";
import getGeoLocation from "./getGeoLocation";
import isProductValid from "./isProductValid";
import isLocationValid from "./isLocationValid";
import getPageNumber from "./getPageNumber";
import trimPath from "./trimPath";

const fetchListingInitialProps: GetStaticProps = async (context) => {
  const {
    params: { page = ["1"] },
  } = context;

  let {
    params: {
      location = context.params.location || DEFAULT_ALL_VALUE,
      product = context.params.product || DEFAULT_PRODUCT_VALUE,
    },
  } = context;

  // TODO: Hard-coded products for KR 1.2 and should be removed after starting to work on KR 1.4 (having 3 categories)
  const products = [{ name: DEFAULT_PRODUCT_VALUE }];
  const { latitude, longitude } = await getGeoLocation(location);
  const hasValidLocation = isLocationValid(location, latitude, longitude);
  const hasValidProduct = isProductValid(product, products);
  const isValidRoute = hasValidProduct && hasValidLocation;

  location = hasValidLocation ? location : DEFAULT_ALL_VALUE;
  product = hasValidProduct ? product : DEFAULT_PRODUCT_VALUE;
  const currentPage = getPageNumber(page);
  const destination = trimPath(`/${product}/${location}/`).replace(
    /all\/$/,
    "",
  );

  if (!Number.isNaN(currentPage)) {
    const hubClient = await createApolloClient(
      process.env.NEXT_PUBLIC_PARTNER_HUB_GRAPHQL_URL,
    );

    const { query, variables } = getProfilesQuery({
      product,
      location,
      latitude,
      longitude,
      radiusInKm: DEFAULT_GEO_LOCATION.radiusInKm,
      page: currentPage,
      active: DEFAULT_PROFILES_STATUS,
      sortBy: DEFAULT_SORT.sortBy,
      sortOrder: DEFAULT_SORT.sortOrder,
    });

    const profileResponse = await hubClient.query({
      query,
      variables,
    });

    const { profiles } = profileResponse?.data || {};
    const dynamicLinks = await fetchDynamicLinks({
      latitude,
      longitude,
      product,
      location,
      radiusInKm: DEFAULT_GEO_LOCATION.radiusInKm,
    });

    /*
    TODO: It's for KR 1.2 and should be uncommented after starting to work on KR 1.4 (having 3 categories)
    const productsResponse = await hubClient.query({
      query: GET_PRODUCTS,
      variables: {},
    });
    const { products } = productsResponse?.data || {};
    */

    if (!isValidRoute || (profiles.totalCount && !profiles.nodes.length)) {
      // Redirects with status code of 307 in case that location|product are not valid or the page is out of range
      return {
        redirect: {
          permanent: true,
          destination,
        },
      };
    }

    if (profiles && products) {
      return {
        props: {
          loading: !isValidRoute,
          profiles: profiles.nodes,
          totalCount: profiles?.totalCount || 0,
          currentPage,
          products,
          product,
          location,
          latitude,
          longitude,
          isValidRoute,
          dynamicLinks,
          status: 200,
        },
        revalidate: 60,
      };
    }
  }

  return {
    props: {
      profiles: null,
      products: null,
      totalCount: 0,
      currentPage: 1,
      status: 404,
      loading: false,
      dynamicLinks: null,
    },
    notFound: true,
    revalidate: 60,
  };
};

export default fetchListingInitialProps;
