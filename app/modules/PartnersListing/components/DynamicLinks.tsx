import React from "react";
import Loader from "@aroundhome/around-kit/components/Loader";
import { DynamicLinkProps } from "@Modules/PartnersListing/PartnersListing.d";
import {
  DynamicLinksContainer,
  DynamicLink,
  DynamicLinksTitle,
  DynamicLinksArea,
} from "@Modules/PartnersListing/PartnersListing.styles";

const DynamicLinks = ({ dynamicLinks, loading }: DynamicLinkProps) => {
  if (!dynamicLinks.length && !loading) return null;

  return (
    <DynamicLinksContainer>
      <DynamicLinksTitle>Fachfirmen in Ihrer Nähe</DynamicLinksTitle>
      {loading ? (
        <Loader size={8} />
      ) : (
        <DynamicLinksArea>
          {dynamicLinks.map((dynamicLink) => (
            <DynamicLink
              color="lightGrey"
              size="lg"
              key={dynamicLink.title}
              href={dynamicLink.href}
            >
              {dynamicLink.title}
            </DynamicLink>
          ))}
        </DynamicLinksArea>
      )}
    </DynamicLinksContainer>
  );
};

export default DynamicLinks;
