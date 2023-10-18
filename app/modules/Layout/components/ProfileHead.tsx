import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { ProfileHeadProps } from "@Modules/Layout/Layout.d";
import getProfileLinkedData from "@Helpers/getProfileLinkedData";
import getProfileBreadcrumbData from "@Helpers/getProfileBreadcrumbData";
import getCanonical from "@Helpers/getCanonical";

const ProfileHead = ({
  profile,
  vendorAverage,
  ratingProps,
}: ProfileHeadProps) => {
  const metaContent = `Alle Infos zu ${profile.companyName} in ${profile.city} : ✓ Kontakt ✓ Dienstleistungen ✓ Erfahrungen ✓ Bewertungen`;
  const router = useRouter();
  const { canonical } = getCanonical(router.asPath, true);
  const profileData = getProfileLinkedData(profile, vendorAverage, ratingProps);
  const breadcrumbData = getProfileBreadcrumbData(
    canonical,
    profile.companyName,
  );

  return (
    <Head>
      <title>
        {profile.companyName} in {profile.city} | Aroundhome
      </title>
      <meta name="description" content={metaContent} />
      <link rel="canonical" href={canonical} />
      <script type="application/ld+json">{profileData}</script>
      <script type="application/ld+json">{breadcrumbData}</script>
    </Head>
  );
};

export default ProfileHead;
