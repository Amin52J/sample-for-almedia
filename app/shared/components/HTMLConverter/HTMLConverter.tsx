import React from "react";
import parse, { domToReact, Element } from "html-react-parser";

const HTMLConverter = ({ text }): JSX.Element => (
  <>
    {parse(text, {
      replace: (domNode: Element) => {
        if (domNode.name === "a") {
          return (
            <a {...domNode.attribs} target="_blank">
              {domToReact(domNode.children)}
            </a>
          );
        }
        if (domNode.name === "h1" || domNode.name === "h2") {
          return <h3 {...domNode.attribs}>{domToReact(domNode.children)}</h3>;
        }
        return domNode;
      },
    })}
  </>
);

export default HTMLConverter;
