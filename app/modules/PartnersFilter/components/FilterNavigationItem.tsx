import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import BreadcrumbItem from "@aroundhome/around-kit/components/Breadcrumbs/BreadcrumbItem";
import useFilter from "@Modules/PartnersFilter/hooks/useFilter";
import getCanonical from "@Helpers/getCanonical";

const FilterNavigationItem = ({ filterItem }) => {
  const { getNavigationLink } = useFilter();
  const router = useRouter();

  // TODO: isDisabled is only for KR 1.2 and should be removed after starting to work on KR 1.4 (having 3 categories)
  const isDisabled = filterItem.label === "Alle Fachfirmen";

  const url = getNavigationLink(filterItem.label);
  const { baseURLWithoutAll } = getCanonical(router.asPath, false);
  const isCurrent = baseURLWithoutAll === url;
  const href = !isDisabled && !isCurrent ? url : undefined;

  const breadcrumbItem = (
    <BreadcrumbItem isDisabled={isDisabled} isCurrent={isCurrent}>
      {filterItem.value}
    </BreadcrumbItem>
  );

  if (href) {
    return (
      <Link href={href} passHref key={`filter_link_${filterItem.value}`}>
        {breadcrumbItem}
      </Link>
    );
  }
  return breadcrumbItem;
};

export default FilterNavigationItem;
