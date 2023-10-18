import React from "react";
import Contact from "@Modules/Contact";
import getProfileLayout from "@Helpers/getProfileLayout";
import fetchProfileInitialProps from "@Helpers/fetchProfileInitialProps";
import { FirmaPageProps } from "@Pages/firma/[slug]/index";
import { getProfilePathsISR } from "@Helpers/getProfilePaths";

const ContactPage = ({ profile }: FirmaPageProps) => (
  <Contact profile={profile} />
);

ContactPage.getLayout = getProfileLayout;

export const getStaticPaths = getProfilePathsISR;

export const getStaticProps = fetchProfileInitialProps;

export default ContactPage;
