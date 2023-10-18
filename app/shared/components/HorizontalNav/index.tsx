import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import useGAContext from "@Shared/stores/GAContext/hooks/useGAContext";
import { Links } from "@Modules/Layout/Layout.d";
import { isActive } from "@Modules/Layout/Layout.constants";
import { Profile } from "@Shared/types/profile";
import {
  NavigationContainer,
  NavigationList,
  NavigationListItem,
  StyledAnchor,
} from "./styles";

interface HorizontalNavProps {
  navigationData: Links[];
  profile: Profile;
}

export const HorizontalNav = ({
  navigationData,
  profile,
}: HorizontalNavProps) => {
  const router = useRouter();
  const { vendorUuid, slug } = profile;

  const { sendProfileTabEvent } = useGAContext(vendorUuid, slug);

  return (
    <NavigationContainer>
      <NavigationList>
        {navigationData.map((link: Links) => {
          const { eventLabel, label, url } = link;
          return (
            label && (
              <NavigationListItem
                onClick={() => sendProfileTabEvent(eventLabel)}
                key={url}
              >
                <Link href={url} passHref>
                  <StyledAnchor active={isActive(router, link)}>
                    {label}
                  </StyledAnchor>
                </Link>
              </NavigationListItem>
            )
          );
        })}
      </NavigationList>
    </NavigationContainer>
  );
};

export default HorizontalNav;
