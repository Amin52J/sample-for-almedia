import GET_PROFILE from "@Shared/requests/queries/profile";
import createApolloClient from "@Helpers/createApolloClient";

const getProfile = async (slug: string) => {
  const hubClient = await createApolloClient(
    process.env.NEXT_PUBLIC_PARTNER_HUB_GRAPHQL_URL,
  );

  return hubClient.query({
    query: GET_PROFILE,
    variables: {
      slug,
    },
  });
};

export default getProfile;
