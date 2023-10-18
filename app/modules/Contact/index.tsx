import React from "react";
import { Profile } from "@Shared/types/profile";
import VendorAddress from "@Modules/Layout/components/VendorAddress";
import useGAContext from "@Shared/stores/GAContext/hooks/useGAContext";
import {
  Image,
  InfoColumn,
  InfoRow,
  Label,
  Name,
  Text,
  Title,
} from "@Modules/Contact/styles";

const Contact = ({ profile }: { profile: Profile | null }) => {
  if (!profile) return null;

  const {
    contactPerson,
    contactEmail,
    contactMobile,
    contactImageUrl,
    website,
    city,
    zipcode,
    street,
    email,
    phone,
    vendorUuid,
    slug,
  } = profile;

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { sendContactPageWebsiteEvent } = useGAContext(vendorUuid, slug);

  return (
    <div>
      {contactPerson && (
        <>
          <Title>Ihr Ansprechpartner</Title>
          <InfoRow hasExtendedBottomMargin>
            <InfoColumn>
              <Name>{contactPerson}</Name>
              <div>
                <Label>E-Mail</Label>
                <Text>{contactEmail || "-"}</Text>
              </div>
              <div>
                <Label>Telefon</Label>
                <Text>{contactMobile || "-"}</Text>
              </div>
            </InfoColumn>
            <InfoColumn hideOnMobile>
              {contactImageUrl?.default &&
                !contactImageUrl?.default.includes("no-image") && (
                  <Image src={contactImageUrl?.default} alt={contactPerson} />
                )}
            </InfoColumn>
          </InfoRow>
          <Title>Firma</Title>
        </>
      )}
      <InfoRow>
        <InfoColumn>
          <Label>Webseite</Label>
          <Text
            onClick={sendContactPageWebsiteEvent}
            as={website ? "a" : null}
            href={website?.includes("http") ? website : `http://${website}`}
            target="_blank"
          >
            {website || "-"}
          </Text>
        </InfoColumn>
        <InfoColumn>
          <Label>Adresse</Label>
          {zipcode ? (
            <Text>
              <VendorAddress city={city} zipcode={zipcode} street={street} />
            </Text>
          ) : (
            "-"
          )}
        </InfoColumn>
      </InfoRow>
      <InfoRow>
        <InfoColumn>
          <Label>E-Mail</Label>
          <Text>{email || "-"}</Text>
        </InfoColumn>
        <InfoColumn>
          <Label>Telefon</Label>
          <Text>{phone || "-"}</Text>
        </InfoColumn>
      </InfoRow>
    </div>
  );
};

export default Contact;
