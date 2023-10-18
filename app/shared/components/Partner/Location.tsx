import React from "react";
import { LocationIcon, LocationArea } from "./Partner.styles";

const Location = ({ distance, zipcode, city }) => {
  const hasAddress = zipcode || city;
  const showSeparator = distance && hasAddress;
  const showIcon = distance || hasAddress;
  const address = hasAddress && `${zipcode} ${city}`;
  const locationText = `${distance || ""} ${showSeparator && " | "}${address}`;

  return (
    <LocationArea>
      {showIcon && <LocationIcon />}
      {locationText}
    </LocationArea>
  );
};
export default Location;
