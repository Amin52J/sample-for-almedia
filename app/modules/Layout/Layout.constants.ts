import { NextRouter } from "next/router";
import { Links } from "@Modules/Layout/Layout.d";

export const generateLinks = (
  slug: string,
  productRequestId?: string | string[],
  hideRatingComments?: boolean,
  page?: string | string[],
): Links[] => {
  const partnerUrl = `/firma/${slug}`;
  const queryParam = productRequestId
    ? `?product_request_id=${productRequestId}`
    : "";

  const links = [
    {
      url: `${partnerUrl}${queryParam}`,
      label: "Beschreibung",
      eventLabel: "description",
    },
    {
      url: `${partnerUrl}/images${queryParam}`,
      eventLabel: "images",
      label: "Bilder",
    },
    {
      url: `${partnerUrl}/ratings${page ? `/${page}` : ""}${queryParam}`,
      label: "Bewertungen",
      eventLabel: "ratings",
      activeOnSubUrls: true,
    },
    {
      url: `${partnerUrl}/contact${queryParam}`,
      label: "Kontakt",
      eventLabel: "contact",
    },
  ];

  if (hideRatingComments) links.splice(1, 1);

  return links;
};

export const isActive = (router: NextRouter, { url, activeOnSubUrls }: Links) =>
  router.asPath.replace(/\/$/, "") === url ||
  (activeOnSubUrls && router.asPath.includes(url.split("?")[0]));
