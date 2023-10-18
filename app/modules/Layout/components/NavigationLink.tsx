import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { isActive } from "@Modules/Layout/Layout.constants";
import { NavigationLinkProps } from "@Modules/Layout/Layout.d";

const NavigationLink: React.FC<NavigationLinkProps> = ({
  children,
  className,
  href,
  links,
  ...props
}) => {
  const router = useRouter();
  const currentLink = links.find(
    (link) => link.url === href && link.label === children,
  );
  return (
    <Link {...props} href={href} passHref>
      <a
        className={`${className} ${
          isActive(router, currentLink) ? "active" : ""
        }`}
      >
        {children}
      </a>
    </Link>
  );
};

export default NavigationLink;
