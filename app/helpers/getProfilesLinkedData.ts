import { ShortProfile } from "@Modules/PartnersListing/PartnersListing.d";
import trimPath from "./trimPath";

const getProfilesLinkedData = (profiles: ShortProfile[]) =>
  JSON.stringify(
    profiles.map((profile) => ({
      "@context": "https://schema.org",
      "@type": "HomeAndConstructionBusiness",
      name: profile.companyName,
      address: {
        "@type": "PostalAddress",
        streetAddress: profile?.street,
        addressLocality: profile?.city,
        postalCode: profile?.zipcode,
        addressCountry: "DE",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: profile?.rating,
        reviewCount: profile?.ratingsCount,
      },
      url: trimPath(
        `${process.env.NEXT_PUBLIC_FACHFIRMEN_URL}/firma/${profile?.slug}`,
      ),
      telephone: profile?.phone,
      image: profile?.logoUrl?.default,
      geo: {
        "@type": "GeoCoordinates",
        latitude: profile?.latitude,
        longitude: profile?.longitude,
      },
    })),
  );

export default getProfilesLinkedData;
