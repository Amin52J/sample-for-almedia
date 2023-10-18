import createApolloClient from "@Helpers/createApolloClient";
import { GET_VENDOR_AVERAGE } from "@Shared/requests/queries/rating";
import getProfile from "@Helpers/getProfile";

const fetchProfileInitialProps = async (props) => {
  const {
    params: { slug: paramSlug },
    query,
    res,
  } = props;

  const { slug: querySlug } = query || {};

  const slug = paramSlug || querySlug;

  const ratingClient = await createApolloClient(
    process.env.NEXT_RATINGS_GRAPHQL_URL,
  );

  let response;
  let profile;
  try {
    response = await getProfile(slug);
    profile = response?.data?.profile;
  } catch (e) {
    profile = null;
  }

  if (profile) {
    let vendorAverage;
    try {
      const ratingResponse = await ratingClient.query({
        query: GET_VENDOR_AVERAGE,
        variables: {
          vendorUuid: profile.vendorUuid,
        },
      });

      vendorAverage = ratingResponse?.data?.vendorAverage;
    } catch {
      vendorAverage = {};
    }

    return {
      props: {
        profile: { ...profile, slug },
        status: 200,
        vendorAverage,
      },
      revalidate: 60,
    };
  }

  if (res) {
    res.statusCode = 404;
  }

  return {
    props: {
      profile: null,
      status: 404,
      vendorAverage: {},
    },
    notFound: true,
    revalidate: 60,
  };
};

export default fetchProfileInitialProps;
