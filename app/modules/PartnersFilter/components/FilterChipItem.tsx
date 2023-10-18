import React from "react";
import Link from "next/link";
import Chip from "@aroundhome/around-kit/components/Chip";
import useFilter from "@Modules/PartnersFilter/hooks/useFilter";
import { DEFAULT_ALL_VALUE } from "@Modules/PartnersListing/PartnersListing.constants";

const FilterChipItem = ({ filterItem }) => {
  const { getLastLink } = useFilter();

  // TODO: isDisabled is only for KR 1.2 and should be removed after starting to work on KR 1.4 (having 3 categories)
  const isDisabled = filterItem.label === "product";

  const url = getLastLink(filterItem.label);
  const href =
    !isDisabled && filterItem.value !== DEFAULT_ALL_VALUE ? url : undefined;

  const chipItem = (
    <Chip
      hasAction
      size="md"
      title={`Remove ${filterItem.label} Filter`}
      isDisabled={isDisabled}
    >
      {filterItem.value}
    </Chip>
  );

  if (href) {
    return (
      <Link href={href} passHref key={`chip_link_${filterItem.value}`}>
        {chipItem}
      </Link>
    );
  }

  return chipItem;
};

export default FilterChipItem;
