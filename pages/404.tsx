import React from "react";
import { NextPage } from "next";
import Head from "next/head";
import ErrorComponent from "@Modules/Error";

const Error: NextPage = () => {
  return (
    <>
      <Head>
        <title>Aroundhome - Page Not Found</title>
        <meta name="robots" content="noindex,nofollow" />
      </Head>
      <ErrorComponent status={404} />
    </>
  );
};

export default Error;
