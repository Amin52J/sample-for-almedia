import { useState } from "react";
import * as localforage from "localforage";
import useFilter from "@Modules/PartnersFilter/hooks/useFilter";
import usePlaces from "@Hooks/usePlaces";
import getLocation from "@Helpers/getLocation";
import {
  RadiusProps,
  LocationProps,
} from "@Modules/PartnersFilter/PartnersFilter.d";
import { DEFAULT_GEO_LOCATION } from "@Modules/PartnersFilter/PartnersFilter.constants";
import { DEFAULT_ALL_VALUE } from "@Modules/PartnersListing/PartnersListing.constants";
import useLocalForage from "@Hooks/useLocalForage";

const useLocation = () => {
  const { storedValue } = useLocalForage("location", DEFAULT_GEO_LOCATION);
  const [radiusInKm, setRadiusInKm] = useState<number>(storedValue.radiusInKm);
  const { updateFilters } = useFilter();
  const { onPlacesSelect, onPlacesChange, resetQuery } = usePlaces();

  const setLocation = async (location: string, lat: number, lng: number) => {
    if (location === DEFAULT_ALL_VALUE) {
      await localforage.removeItem("location");
      resetQuery();
    } else {
      await localforage.setItem("location", {
        location: location.toLowerCase(),
        latitude: lat,
        longitude: lng,
        radiusInKm: radiusInKm || DEFAULT_GEO_LOCATION.radiusInKm,
      });
    }
    updateFilters("location", location);
  };

  const onLocationSelect = async (item: LocationProps) => {
    if (item) {
      onPlacesChange(item.label);
      const { lat, lng, data } = await onPlacesSelect(item.value);
      const { location } = getLocation(data);
      await setLocation(location, lat, lng);
    }
  };

  const onRadiusSelect = async (item: RadiusProps) => {
    const { latitude = null, longitude = null, location } =
      (await localforage.getItem("location")) || {};
    setRadiusInKm(item.value);
    if (location !== DEFAULT_ALL_VALUE && latitude && longitude) {
      await localforage.setItem("location", {
        latitude,
        longitude,
        location,
        radiusInKm: item.value || DEFAULT_GEO_LOCATION.radiusInKm,
      });
      updateFilters("location", location);
    }
  };

  return {
    setLocation,
    radiusInKm,
    onRadiusSelect,
    onLocationSelect,
  };
};

export default useLocation;
