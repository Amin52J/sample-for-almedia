import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/router";
import * as localforage from "localforage";
import getProfilesQuery from "@Helpers/getProfilesQuery";
import useClient from "@Hooks/useClient";
import {
  DEFAULT_PROFILES_STATUS,
  DEFAULT_SORT,
} from "@Modules/PartnersListing/PartnersListing.constants";
import { DEFAULT_GEO_LOCATION } from "@Modules/PartnersFilter/PartnersFilter.constants";
import { ShortProfile } from "@Modules/PartnersListing/PartnersListing.d";
import fetchDynamicLinks from "@Modules/PartnersListing/helpers/fetchDynamicLinks";

const useClientProfiles = (
  serverProfiles: ShortProfile[],
  serverTotalCount: number,
  serverCurrentPage: number,
  serverDynamicLinks: { title: string; href: string }[],
) => {
  const [profiles, setProfiles] = useState(serverProfiles);
  const [totalCount, setTotalCount] = useState(serverTotalCount);
  const [currentPage, setCurrentPage] = useState(serverCurrentPage);
  const [dynamicLinks, setDynamicLinks] = useState(serverDynamicLinks);
  const router = useRouter();
  const client = useClient(process.env.NEXT_PUBLIC_PARTNER_HUB_GRAPHQL_URL);

  const getProfiles = useCallback(async () => {
    const { product, location, page = ["1"] } = router.query;
    const {
      latitude = null,
      longitude = null,
      radiusInKm,
      location: storedLocation,
    } = (await localforage.getItem("location")) || {};
    const { sortBy, sortOrder } = (await localforage.getItem("sort")) || {};

    if (client && storedLocation === location) {
      let pageValue = parseInt(page[0], 10);
      pageValue = Number.isNaN(pageValue) ? 1 : pageValue;

      const { query, variables } = getProfilesQuery({
        product,
        location,
        latitude,
        longitude,
        radiusInKm: radiusInKm || DEFAULT_GEO_LOCATION.radiusInKm,
        page: pageValue,
        active: DEFAULT_PROFILES_STATUS,
        sortBy: sortBy || DEFAULT_SORT.sortBy,
        sortOrder: sortOrder || DEFAULT_SORT.sortOrder,
      });

      const profileResponse = await client.query({
        query,
        variables,
      });

      const { profiles: newProfiles } = profileResponse?.data || {};

      const newDynamicLinks = await fetchDynamicLinks({
        latitude,
        longitude,
        product,
        location,
        radiusInKm: radiusInKm || DEFAULT_GEO_LOCATION.radiusInKm,
      });

      setProfiles(newProfiles.nodes);
      setCurrentPage(pageValue);
      setTotalCount(newProfiles.totalCount);
      setDynamicLinks(newDynamicLinks);
    }
  }, [client, router.query]);

  useEffect(() => {
    if (serverProfiles.length) {
      setProfiles(serverProfiles);
      if (serverTotalCount !== totalCount) {
        setTotalCount(serverTotalCount);
      }
      if (serverCurrentPage !== currentPage) {
        setCurrentPage(serverCurrentPage);
      }
      if (serverDynamicLinks !== dynamicLinks) {
        setDynamicLinks(serverDynamicLinks);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [serverProfiles, serverCurrentPage, serverTotalCount, serverDynamicLinks]);

  useEffect(() => {
    getProfiles();
  }, [getProfiles, router.query]);

  return {
    profiles,
    totalCount,
    currentPage,
    dynamicLinks,
  };
};

export default useClientProfiles;
