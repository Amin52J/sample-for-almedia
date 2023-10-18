import React from "react";
import Link from "next/link";
import VendorAddress from "@Modules/Layout/components/VendorAddress";
import useGAContext from "@Shared/stores/GAContext/hooks/useGAContext";
import { Profile } from "@Shared/types/profile";
import {
  CompanyLogo,
  CompanyTitle,
  InformationColumn,
  InformationColumnContainer,
  InfoSection,
  InfoText,
  InfoTitle,
} from "@Modules/Layout/Layout.styles";

const Info = ({
  profile,
  productRequestId,
}: {
  profile: Profile;
  productRequestId: string | string[];
}) => {
  const {
    vendorUuid,
    logoUrl,
    companyName,
    website,
    phone,
    email,
    city,
    street,
    zipcode,
    contactEmail,
    contactMobile,
    contactPerson,
    slug,
  } = profile;

  const { sendInfoColumnEvent } = useGAContext(vendorUuid, slug);

  return (
    <InformationColumn hideOnMobile>
      <CompanyLogo showOnDesktop src={logoUrl?.default} alt={companyName} />
      <CompanyTitle hideOnDesktop as="h2">
        {companyName}
      </CompanyTitle>
      <InformationColumnContainer>
        {contactPerson && (
          <InfoSection>
            <InfoTitle>Ihr Ansprechpartner</InfoTitle>
            <Link
              href={`/firma/${slug}/contact${
                productRequestId
                  ? `?product_request_id=${productRequestId}`
                  : ""
              }`}
              passHref
            >
              <InfoText
                onClick={() => sendInfoColumnEvent("contact")}
                bold
                as="a"
              >
                {contactPerson}
              </InfoText>
            </Link>
          </InfoSection>
        )}
        <InfoSection>
          <InfoTitle>Email</InfoTitle>
          <InfoText
            onClick={() => sendInfoColumnEvent("email")}
            as={contactEmail || email ? "a" : null}
            href={
              contactEmail || email ? `mailto:${contactEmail || email}` : null
            }
            target="_blank"
          >
            {contactEmail || email || "-"}
          </InfoText>
        </InfoSection>
        <InfoSection>
          <InfoTitle>Telefon</InfoTitle>
          <InfoText
            onClick={() => sendInfoColumnEvent("telefon")}
            as={contactMobile || phone ? "a" : null}
            href={
              contactMobile || phone ? `tel:${contactMobile || phone}` : null
            }
            target="_blank"
          >
            {contactMobile || phone || "-"}
          </InfoText>
        </InfoSection>
        <InfoSection>
          <InfoTitle>Webseite</InfoTitle>
          <InfoText
            onClick={() => sendInfoColumnEvent("website")}
            as={website ? "a" : null}
            href={website?.includes("http") ? website : `http://${website}`}
            target="_blank"
          >
            {website || "-"}
          </InfoText>
        </InfoSection>
        <InfoSection>
          <InfoTitle>Adresse</InfoTitle>
          {zipcode ? (
            <InfoText>
              <VendorAddress zipcode={zipcode} street={street} city={city} />
            </InfoText>
          ) : (
            "-"
          )}
        </InfoSection>
      </InformationColumnContainer>
    </InformationColumn>
  );
};

export default Info;
