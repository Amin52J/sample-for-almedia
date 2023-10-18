import React from "react";
import Logo from "@Shared/components/Partner/Logo";
import Title from "@Shared/components/Partner/Title";
import Rating from "@Shared/components/Partner/Rating";
import Tags from "@Shared/components/Partner/Tags";
import Description from "@Shared/components/Partner/Description";
import ProfileButton from "@Shared/components/Partner/ProfileButton";
import Location from "@Shared/components/Partner/Location";
import useMediaContext from "@Shared/stores/MediaContext/hooks/useMediaContext";
import { ShortProfile } from "@Modules/PartnersListing/PartnersListing.d";
import PartnerCardStyles from "./PartnerCard.styles";

const PartnerCard = ({
  companyName,
  logoUrl,
  products,
  description,
  slug,
  rating,
  ratingsCount,
  city,
  zipcode,
  distance = "",
  badges,
}: ShortProfile) => {
  const logo = logoUrl?.default || "";
  const tags = products.map((product) => product.name);
  const { isDesktop } = useMediaContext();
  return (
    <PartnerCardStyles>
      <Logo logo={logo} companyName={companyName} slug={slug} />
      <Title companyName={companyName} badges={badges} slug={slug} />
      <Rating rating={rating} ratingsCount={ratingsCount} />
      {tags.length !== 0 ? <Tags tags={tags} slug={slug} /> : null}
      {description ? <Description description={description} /> : null}
      {isDesktop ? <ProfileButton slug={slug} /> : null}
      <Location distance={distance} zipcode={zipcode} city={city} />
    </PartnerCardStyles>
  );
};

export default PartnerCard;
