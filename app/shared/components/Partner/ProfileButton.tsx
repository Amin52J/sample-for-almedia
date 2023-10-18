import React from "react";
import Link from "next/link";
import ChevronRight from "@aroundhome/around-kit/icons/ChevronRight";
import LinkWrapper from "@Shared/components/LinkWrapper/LinkWrapper";
import { ProfileButtonArea, StyledProfileButton } from "./Partner.styles";

const ProfileButton = ({ slug }) => (
  <ProfileButtonArea>
    <Link href={`/firma/${slug}`} passHref>
      <LinkWrapper>
        <StyledProfileButton
          iconRight={ChevronRight}
          buttonType="secondary"
          color="green"
          size="sm"
        >
          Profil anzeigen
        </StyledProfileButton>
      </LinkWrapper>
    </Link>
  </ProfileButtonArea>
);

export default ProfileButton;
