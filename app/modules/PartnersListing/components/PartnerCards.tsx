import React from "react";
import PartnerCard from "@Modules/PartnerCard";
import Divider from "@Shared/components/Divider";
import { PartnerCardsProps } from "@Modules/PartnersListing/PartnersListing.d";

const PartnerCards = ({ profiles }: PartnerCardsProps) => (
  <>
    {profiles?.map((partner, index) => (
      <div key={partner.slug}>
        <PartnerCard {...partner} />
        {index + 1 < profiles.length && <Divider top={5} bottom={4}/>}
      </div>
    ))}
  </>
);

export default PartnerCards;
