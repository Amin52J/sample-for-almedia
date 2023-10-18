import React from "react";
import Link from "next/link";
import { LogoArea, LogoStyles, LogoAnchorStyles } from "./Partner.styles";

const Logo = ({ logo, companyName, slug }) => (
  <LogoArea>
    <Link href={`/firma/${slug}`} passHref>
      <LogoAnchorStyles>
        <LogoStyles src={logo} alt={companyName} />
      </LogoAnchorStyles>
    </Link>
  </LogoArea>
);

export default Logo;
