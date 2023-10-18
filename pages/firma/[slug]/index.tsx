import React from "react";
import { Profile } from "@Shared/types/profile";
import Description from "@Modules/Description";
import fetchProfileInitialProps from "@Helpers/fetchProfileInitialProps";
import getProfileLayout from "@Helpers/getProfileLayout";
import { getProfilePathsISR } from "@Helpers/getProfilePaths";

export interface FirmaPageProps {
  profile: Profile;
}

const Firma = ({ profile }: FirmaPageProps) => (
  <Description profile={profile} />
);

Firma.getLayout = getProfileLayout;

export const getStaticPaths = getProfilePathsISR;

export const getStaticProps = fetchProfileInitialProps;

export default Firma;
