import React, { useEffect, useCallback } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Loader from "@aroundhome/around-kit/components/Loader";
import PartnersListing from "@Modules/PartnersListing";
import { PartnersListingProps } from "@Modules/PartnersListing/PartnersListing.d";
import getListingPathsISR from "@Helpers/getListingPaths";
import fetchListingInitialProps from "@Helpers/fetchListingInitialProps";
import getListingPageTitle from "@Helpers/getListingPageTitle";
import getListingPageMetaContent from "@Helpers/getListingPageMetaContent";
import useFilter from "@Modules/PartnersFilter/hooks/useFilter";
import { DEFAULT_PRODUCT_VALUE } from "@Modules/PartnersListing/PartnersListing.constants";
import getProfilesLinkedData from "@Helpers/getProfilesLinkedData";
import getProfileBreadcrumbData from "@Helpers/getProfileBreadcrumbData";
import getCanonical from "@Helpers/getCanonical";
import useClientProfiles from "@Hooks/useClientProfiles";
import { LoaderContainer } from "@Modules/PartnersListing/PartnersListing.styles";
import useLocation from "@Modules/PartnersFilter/hooks/useLocation";

const ListingsPage = ({
  profiles: serverProfiles = [],
  totalCount: serverTotalCount = 0,
  products,
  product,
  location,
  latitude,
  longitude,
  currentPage: serverCurrentPage = 1,
  isValidRoute,
  loading = true,
  dynamicLinks: serverDynamicLinks = [],
}: PartnersListingProps) => {
  const { updateFilters, productState } = useFilter();
  const { setLocation } = useLocation();
  const { profiles, totalCount, currentPage, dynamicLinks } = useClientProfiles(
    serverProfiles,
    serverTotalCount,
    serverCurrentPage,
    serverDynamicLinks,
  );

  const metaContent = getListingPageMetaContent(location);
  const pageTile = getListingPageTitle(product, location);
  const router = useRouter();
  const { canonical } = getCanonical(router.asPath, true);
  const profilesData = getProfilesLinkedData(profiles);
  const breadcrumbData = getProfileBreadcrumbData(canonical);

  const updateLocationProps = useCallback(async () => {
    await setLocation(location, latitude, longitude);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  useEffect(() => {
    updateLocationProps();
  }, [updateLocationProps]);

  useEffect(() => {
    if (product === DEFAULT_PRODUCT_VALUE && product !== productState) {
      updateFilters("product", product);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [product, productState]);

  return (
    <>
      <Head>
        <title>{pageTile}</title>
        <meta name="description" content={metaContent} />
        <link rel="canonical" href={canonical} />
        <script type="application/ld+json">{profilesData}</script>
        <script type="application/ld+json">{breadcrumbData}</script>
      </Head>
      {loading && (
        <LoaderContainer>
          <Loader size={10} />
        </LoaderContainer>
      )}
      {isValidRoute ? (
        <PartnersListing
          profiles={profiles}
          totalCount={totalCount}
          products={products}
          currentPage={currentPage}
          dynamicLinks={dynamicLinks}
          loading={loading}
        />
      ) : null}
    </>
  );
};

export const getStaticPaths = getListingPathsISR;

export const getStaticProps = fetchListingInitialProps;

export default ListingsPage;
