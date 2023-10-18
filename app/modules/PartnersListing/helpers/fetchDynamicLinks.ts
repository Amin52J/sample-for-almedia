import trimPath from "@Helpers/trimPath";
import createApolloClient from "@Helpers/createApolloClient";
import { ProfileCitiesQueryProps } from "./getProfileCitiesQuery.d";
import getProfileCitiesQuery from "./getProfileCitiesQuery";

const fetchDynamicLinks = async ({
  product,
  location,
  latitude,
  longitude,
  radiusInKm,
}: ProfileCitiesQueryProps) => {
  const hubClient = await createApolloClient(
    process.env.NEXT_PUBLIC_PARTNER_HUB_GRAPHQL_URL,
  );

  const { variables, query } = getProfileCitiesQuery({
    product,
    location,
    latitude,
    longitude,
    radiusInKm,
  });

  const profileCitiesResponse = await hubClient.query({
    query,
    variables,
  });

  const { profileCities } = profileCitiesResponse?.data || {};

  // TODO: Get Badsanierung from product properties after KR1.2
  const dynamicLinks = profileCities
    .filter((city: string) => city.toLowerCase() !== location)
    .slice(0, 20)
    .map((city: string) => ({
      title: `Badsanierung in ${city}`,
      href: trimPath(
        `${process.env.NEXT_PUBLIC_BASE_PATH}/${
          product ? `${product}/${city}` : city
        }/`,
      ),
    }));

  return dynamicLinks;
};

export default fetchDynamicLinks;
