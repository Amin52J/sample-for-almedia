import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import ChevronDown from "@aroundhome/around-kit/icons/ChevronDown";
import useGAContext from "@Shared/stores/GAContext/hooks/useGAContext";
import { Links } from "@Modules/Layout/Layout.d";
import { Profile } from "@Shared/types/profile";
import { isActive } from "@Modules/Layout/Layout.constants";
import {
  Accordion,
  AccordionContent,
  AccordionHead,
  AccordionContainer,
} from "@Shared/components/AccordionNav/styles";

interface AccordionNavProps {
  navigationData: Links[];
  profile: Profile;
}

const AccordionNav: React.FC<AccordionNavProps> = ({
  navigationData,
  profile,
  children,
}) => {
  const router = useRouter();
  const { vendorUuid, slug } = profile;

  const { sendProfileTabEvent } = useGAContext(vendorUuid, slug);

  return (
    <AccordionContainer>
      {navigationData.map((link: Links) => (
        <Accordion
          onClick={() => sendProfileTabEvent(link.eventLabel)}
          key={link.label}
          isActive={isActive(router, link)}
        >
          <Link href={link.url} passHref>
            <AccordionHead as={isActive(router, link) && "div"}>
              {link.label}{" "}
              {!isActive(router, link) && (
                <ChevronDown width="2rem" height="2rem" />
              )}
            </AccordionHead>
          </Link>
          {isActive(router, link) && (
            <AccordionContent>{children}</AccordionContent>
          )}
        </Accordion>
      ))}
    </AccordionContainer>
  );
};

export default AccordionNav;
