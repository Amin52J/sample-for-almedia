import createApolloClient from "@Helpers/createApolloClient";
import { GET_ALL_PROFILES } from "@Shared/requests/queries/profile";

const getProfilePaths = async () => {
  const hubClient = await createApolloClient(
    process.env.NEXT_PUBLIC_PARTNER_HUB_GRAPHQL_URL,
  );

  const {
    data: { profiles },
  } = await hubClient.query({
    query: GET_ALL_PROFILES,
  });

  const slugs = profiles
    .filter(({ active }) => active)
    .reduce((acc, cur) => [...acc, ...cur.slugs], []);

  return {
    paths: slugs.map((slug) => ({
      params: { slug },
    })),
    fallback: true,
  };
};

export const getProfilePathsISR = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export default getProfilePaths;
