import React from "react";
import { PartnersListingHeaderProps } from "@Modules/PartnersListing/PartnersListing.d";
import {
  PartnersListingHeaderStyles,
  PartnersListingLimitText,
} from "@Modules/PartnersListing/PartnersListing.styles";
import PartnerSorting from "./PartnersSorting";

const PartnersListingHeader = ({
  selectedPage,
  pageLimit,
  totalCount,
}: PartnersListingHeaderProps) => {
  const count = selectedPage * pageLimit;
  const HeaderMessage =
    totalCount && selectedPage && pageLimit
      ? `${count - pageLimit + 1} - ${Math.min(
          count,
          totalCount,
        )} von ${totalCount} Fachfirmen`
      : "0 von 0 Fachfirmen";

  return (
    <PartnersListingHeaderStyles hideOnMobile={!totalCount}>
      <PartnersListingLimitText>{HeaderMessage}</PartnersListingLimitText>
      <PartnerSorting isDisabled={!totalCount} />
    </PartnersListingHeaderStyles>
  );
};

export default PartnersListingHeader;
