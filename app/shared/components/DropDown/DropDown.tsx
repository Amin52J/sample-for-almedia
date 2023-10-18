import React, { useEffect, useState } from "react";
import DropDown from "@aroundhome/around-kit/components/DropDown";
import DropDownBody from "./DropDownBody";
import { DropDownProps } from "./DropDown.d";

export default ({
  body,
  position,
  openButton,
  header,
  isDisabled,
}: DropDownProps): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);
  const [lastStatus, setLastStatus] = useState(false);

  const handleClose = () => {
    if (isOpen === true) {
      setIsOpen(false);
    }
  };

  const handleChange = (status: boolean) => {
    if (status !== lastStatus) {
      setLastStatus(status);
    }
  };

  useEffect(() => {
    setIsOpen(lastStatus);
  }, [lastStatus]);

  return isDisabled ? (
    openButton
  ) : (
    <DropDown
      show={isOpen}
      onChange={handleChange}
      body={<DropDownBody body={body} header={header} onClose={handleClose} />}
      position={position}
    >
      {openButton}
    </DropDown>
  );
};
