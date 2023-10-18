import React from "react";
import Images from "@Modules/Images";
import getProfileLayout from "@Helpers/getProfileLayout";
import fetchProfileInitialProps from "@Helpers/fetchProfileInitialProps";
import { FirmaPageProps } from "@Pages/firma/[slug]/index";
import { getProfilePathsISR } from "@Helpers/getProfilePaths";

const ImagesPage = ({ profile }: FirmaPageProps) => {
  const { referenceImages, awardImages } = profile || {};

  return (
    <Images
      images={(referenceImages?.imageUrls || []).concat(
        awardImages?.imageUrls || [],
      )}
    />
  );
};

ImagesPage.getLayout = getProfileLayout;

export const getStaticPaths = getProfilePathsISR;

export const getStaticProps = fetchProfileInitialProps;

export default ImagesPage;
