import { GOOGLE_API_URL } from "@Modules/PartnersListing/PartnersListing.constants";
import axios from "axios";

const getLocationSpecs = async (latitude: number, longitude: number) => {
  let country = null;
  let zipcode = null;
  let city = null;

  if (latitude && longitude) {
    const reverseGeo = await axios.get(
      `${GOOGLE_API_URL}/geocode/json?latlng=${latitude},${longitude}&key=${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}`,
    );

    const addressComponents = [
      ...reverseGeo?.data?.results?.[0]?.address_components,
    ];

    addressComponents.forEach((item) => {
      if (item.types.includes("country")) {
        country = item?.long_name || null;
      }
      if (item.types.includes("locality")) {
        city = item?.long_name.replace("/", "-") || null;
      }
      if (item.types.includes("postal_code")) {
        zipcode = item?.long_name || null;
      }
    });
  }

  return { country, city, zipcode };
};

export default getLocationSpecs;
