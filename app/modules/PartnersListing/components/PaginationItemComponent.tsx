import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import LinkWrapper from "@Shared/components/LinkWrapper/LinkWrapper";
import getPagePathname from "../helpers/getPagePathname";

const PaginationItemComponent = ({ children, ...props }) => {
  const router = useRouter();
  const { className, onClick, disabled } = props;

  // get the page number which is the text of the child of type span
  // TODO: expose the page number through around-kit after upgrading to v8+
  const page = parseInt(
    React.Children.map(children, (child) => {
      return child && child.type === "span" ? child : null;
    })[0].props.children,
    10,
  );

  return !Number.isNaN(page) ? (
    <Link passHref href={getPagePathname(router, page)}>
      <LinkWrapper {...props}>{children}</LinkWrapper>
    </Link>
  ) : (
    <button className={className} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default PaginationItemComponent;
