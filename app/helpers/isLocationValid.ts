import { DEFAULT_ALL_VALUE } from "@Modules/PartnersListing/PartnersListing.constants";

const isLocationValid = (
  location: string | string[],
  latitude: number,
  longitude: number,
): boolean => {
  if (location !== DEFAULT_ALL_VALUE) {
    return latitude !== null && longitude !== null;
  }
  return true;
};

export default isLocationValid;
