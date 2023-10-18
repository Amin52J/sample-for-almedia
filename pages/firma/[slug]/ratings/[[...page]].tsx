import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import CustomerRating from "@Modules/CustomerRating";
import GET_RATING from "@Shared/requests/queries/rating";
import createApolloClient from "@Helpers/createApolloClient";
import type { RatingConnection, VendorAverage } from "@Shared/types/rating";
import GET_PROFILE from "@Shared/requests/queries/profile";
import { Profile } from "@Shared/types/profile";
import getProfileLayout from "@Helpers/getProfileLayout";

interface RatingsPageProps {
  data: {
    ratingConnection: RatingConnection;
    vendorAverage: VendorAverage;
  };
  profile: Profile;
}

const RatingsPage = ({
  data: {
    ratingConnection: { totalCount, nodes },
    vendorAverage,
  },
  profile: { hideRatingComments },
}: RatingsPageProps) => {
  const [selectedPage, setSelectedPage] = useState(1);
  const router = useRouter();

  useEffect(() => {
    if (router.query.page) {
      setSelectedPage(+router.query.page[0]);
    }
  }, [router]);

  const handlePageChange = (page: number) => {
    setSelectedPage(page);
    router.push({
      pathname: `/firma/${router.query.slug}/ratings/${page}`,
      query: router.query.product_request_id
        ? // eslint-disable-next-line @typescript-eslint/camelcase
          { product_request_id: router.query.product_request_id }
        : {},
    });
  };

  if (hideRatingComments) return null;

  return (
    <CustomerRating
      totalCount={totalCount}
      ratings={nodes}
      vendorAverage={vendorAverage}
      handlePageChange={handlePageChange}
      selectedPage={selectedPage}
    />
  );
};

RatingsPage.getLayout = getProfileLayout;

export const getServerSideProps = async (context) => {
  const { res } = context;
  const { slug } = context.params;

  let vendorUuid = null;

  const hubClient = await createApolloClient(
    process.env.NEXT_PUBLIC_PARTNER_HUB_GRAPHQL_URL,
  );
  const { data: profileData } = await hubClient.query({
    query: GET_PROFILE,
    variables: {
      slug,
    },
  });

  if (profileData?.profile) {
    vendorUuid = profileData.profile.vendorUuid;
  } else {
    res.statusCode = 404;
    return {
      props: {
        data: {},
        profile: null,
        status: 404,
        vendorAverage: {},
      },
      notFound: true,
    };
  }

  const ratingClient = await createApolloClient(
    process.env.NEXT_RATINGS_GRAPHQL_URL,
  );

  const { data } = await ratingClient.query({
    query: GET_RATING,
    variables: {
      vendorUuids: vendorUuid,
      vendorUuid,
      page: +context.params.page?.[0] || 1,
    },
  });

  if (data) {
    return {
      props: {
        data,
        vendorAverage: data.vendorAverage,
        profile: { ...profileData?.profile, slug },
      },
    };
  }

  return {
    props: {
      data: {},
      vendorAverage: {},
      profile: { ...profileData?.profile, slug },
    },
  };
};

export default RatingsPage;
