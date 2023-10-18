import React from "react";
import { TagsArea, TagsStyles } from "./Partner.styles";

const Tags = ({ tags, slug }) => (
  <TagsArea>
    {tags.map((tag: string) => (
      <TagsStyles key={`${slug}_${tag}`}>{tag}</TagsStyles>
    ))}
  </TagsArea>
);

export default Tags;
