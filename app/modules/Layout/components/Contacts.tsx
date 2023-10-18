import React from "react";
import MailIcon from "@aroundhome/around-kit/icons/Mail";
import PhoneIcon from "@aroundhome/around-kit/icons/Phone";
import useGAContext from "@Shared/stores/GAContext/hooks/useGAContext";
import { Profile } from "@Shared/types/profile";
import { ButtonsContainer, ContactButton } from "@Modules/Layout/Layout.styles";

const Contacts = ({ profile }: { profile: Profile }) => {
  const {
    email,
    contactEmail,
    vendorUuid,
    phone,
    contactMobile,
    zipcode,
    city,
    street,
    slug,
  } = profile;

  const { sendServiceButtonEvent } = useGAContext(vendorUuid, slug);

  return (
    <ButtonsContainer>
      {(email || contactEmail) && (
        <ContactButton
          iconRight={MailIcon}
          buttonType="secondary"
          color="green"
          size="sm"
          onPress={() => sendServiceButtonEvent("email")}
          href={`mailto:${contactEmail || email}`}
        >
          E-Mail
        </ContactButton>
      )}
      {(phone || contactMobile) && (
        <ContactButton
          iconRight={PhoneIcon}
          buttonType="secondary"
          color="green"
          size="sm"
          onPress={() => sendServiceButtonEvent("phone")}
          href={`tel:${contactMobile || phone}`}
        >
          Telefon
        </ContactButton>
      )}
      {zipcode && (
        <ContactButton
          iconRight={MailIcon}
          buttonType="secondary"
          color="green"
          size="sm"
          onPress={() => sendServiceButtonEvent("address")}
          href={`https://www.google.com/maps?z=15&daddr=${street} ${zipcode} ${city}`}
          target="_blank"
        >
          Adresse
        </ContactButton>
      )}
    </ButtonsContainer>
  );
};

export default Contacts;
