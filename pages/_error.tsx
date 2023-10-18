import React from "react";
import { NextPage } from "next";
import Head from "next/head";
import ErrorComponent from "@Modules/Error";

interface ErrorProps {
  statusCode: number;
}

const Error: NextPage<ErrorProps> = ({ statusCode = 500 }) => {
  return (
    <>
      <Head>
        <title>Aroundhome - {statusCode}</title>
        <meta name="robots" content="noindex,nofollow" />
      </Head>
      <ErrorComponent status={statusCode} />
    </>
  );
};

Error.getInitialProps = ({ res }) => {
  const statusCode = res?.statusCode || 500;

  return { statusCode };
};

export default Error;
