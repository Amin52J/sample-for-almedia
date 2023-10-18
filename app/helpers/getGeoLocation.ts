import axios from "axios";
import {
  DEFAULT_ALL_VALUE,
  GOOGLE_API_URL,
} from "@Modules/PartnersListing/PartnersListing.constants";
import trimPath from "./trimPath";

const getGeoLocation = async (location: string | string[]) => {
  let latitude = null;
  let longitude = null;

  if (location !== DEFAULT_ALL_VALUE && typeof location === "string") {
    const geoLocation = await axios.get(
      `${GOOGLE_API_URL}/geocode/json?address=${trimPath(location)}&key=${
        process.env.NEXT_PUBLIC_GOOGLE_API_KEY
      }`,
    );

    const { lat, lng } =
      geoLocation?.data?.results?.[0]?.geometry?.location || {};
    latitude = lat || null;
    longitude = lng || null;
  }

  return {
    latitude,
    longitude,
  };
};

export default getGeoLocation;
