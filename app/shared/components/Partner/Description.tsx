import React, { useState } from "react";
import ChevronRight from "@aroundhome/around-kit/icons/ChevronRight";
import ChevronLeft from "@aroundhome/around-kit/icons/ChevronLeft";
import Anchor from "@aroundhome/around-kit/components/Anchor";
import removeHTMLTags from "@Helpers/removeHTMLTags";
import useEllipsis from "@Hooks/useEllipsis";
import HTMLConverter from "@Shared/components/HTMLConverter/HTMLConverter";
import {
  DescriptionArea,
  DescriptionText,
  DescriptionMore,
} from "./Partner.styles";

const Description = ({ description }) => {
  const text = removeHTMLTags(description);
  const [readmore, setReadMore] = useState(true);
  const { overflow, slicedText } = useEllipsis(text);

  const toggleReadmore = () => {
    setReadMore(!readmore);
  };

  return (
    <DescriptionArea>
      <DescriptionText>
        <HTMLConverter text={readmore ? slicedText : text} />
      </DescriptionText>
      {overflow && (
        <DescriptionMore>
          <Anchor
            isBold
            color="green"
            size="md"
            iconRight={readmore ? ChevronRight : ChevronLeft}
            onClick={toggleReadmore}
          >
            {readmore ? "Mehr lesen" : "Weniger lesen"}
          </Anchor>
        </DescriptionMore>
      )}
    </DescriptionArea>
  );
};

export default Description;
