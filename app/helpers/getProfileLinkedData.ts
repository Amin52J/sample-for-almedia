import removeHTMLTags from "@Helpers/removeHTMLTags";
import { Profile } from "@Shared/types/profile";
import { Rating, VendorAverage } from "@Shared/types/rating";
import { RatingProps } from "@Modules/Layout/Layout.d";

const getProfileLinkedData = (
  profile: Profile,
  vendorAverage: VendorAverage,
  ratingProps: RatingProps,
) => {
  const ratings: Rating[] = ratingProps?.ratingConnection?.nodes || [];

  const review = ratings.map((rating) =>
    rating?.average
      ? {
          "@type": "Review",
          reviewRating: {
            "@type": "Rating",
            ratingValue: rating?.average,
          },
          author: {
            "@type": "Person",
            name: `${rating?.customer?.firstName} ${rating?.customer?.lastName}`,
          },
          reviewBody: rating?.comment,
        }
      : null,
  );

  const aggregateRating = vendorAverage?.average
    ? {
        "@type": "AggregateRating",
        ratingValue: vendorAverage?.average,
        reviewCount: vendorAverage?.count,
      }
    : null;

  return JSON.stringify({
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
    aggregateRating,
    review: review.length ? review : null,
    description: removeHTMLTags(profile?.description),
    url: profile?.website,
    telephone: profile?.phone,
    image: profile?.logoUrl?.default,
  });
};

export default getProfileLinkedData;
