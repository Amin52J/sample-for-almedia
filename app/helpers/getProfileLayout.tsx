import React, { ReactElement } from "react";
import Layout from "@Modules/Layout";

const getProfileLayout = (page: ReactElement) => {
  const {
    props: { profile, vendorAverage },
  } = page;

  return (
    <Layout profile={profile} vendorAverage={vendorAverage}>
      {page}
    </Layout>
  );
};

export default getProfileLayout;
