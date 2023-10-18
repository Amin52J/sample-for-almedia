import React from "react";
import { AddressContainer, Street, ZipCode } from "@Modules/Layout/Layout.styles";

interface VendorAddressI {
  zipcode: string;
  street: string | null;
  city: string | null;
}

const VendorAddress = ({ zipcode, street, city }: VendorAddressI) => (
  <AddressContainer>
    {street && <Street>{street}</Street>}
    <ZipCode>
      {zipcode} {city}
    </ZipCode>
  </AddressContainer>
);

export default VendorAddress;
