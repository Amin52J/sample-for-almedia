import axios from "axios";
import { GOOGLE_API_URL } from "@Modules/PartnersListing/PartnersListing.constants";

const getPostcode = async (latitude: number, longitude: number) => {
  let postcode = null;

  if (latitude && longitude) {
    const reverseGeo = await axios.get(
      `${GOOGLE_API_URL}/geocode/json?latlng=${latitude},${longitude}&key=${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}`,
    );

    postcode =
      reverseGeo?.data?.results?.[0]?.address_components.find((ac) =>
        ac.types.includes("postal_code"),
      )?.long_name || null;
  }
  return postcode;
};

export default getPostcode;
