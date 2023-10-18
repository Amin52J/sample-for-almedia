import React from "react";
import Anchor from "@aroundhome/around-kit/components/Anchor";
import { DropDownBodyProps } from "./DropDown.d";
import {
  DropDownBodyStyles,
  DropDownHeader,
  DropDownHeaderText,
  DropDownClose,
} from "./DropDown.styles";

const DropDownBody = ({
  body,
  header,
  onClose,
}: DropDownBodyProps): JSX.Element => {
  return (
    <DropDownBodyStyles>
      <DropDownHeader>
        <DropDownHeaderText>{header}</DropDownHeaderText>
        <DropDownClose>
          <Anchor color="green" size="md" onClick={onClose} isBold>
            Fertig
          </Anchor>
        </DropDownClose>
      </DropDownHeader>
      {body}
    </DropDownBodyStyles>
  );
};

export default DropDownBody;
