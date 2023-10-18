import React, { useMemo } from "react";
import { CategoryTag, CategoryTagsContainer } from "@Modules/Layout/Layout.styles";

export default function CategoryTags({ tags }) {
  const uniqueTags = useMemo(
    () => [...new Map(tags.map((item) => [item.name, item])).values()],
    [tags],
  );

  return (
    <CategoryTagsContainer>
      {uniqueTags.map(({ name }) => (
        <CategoryTag key={name}>{name}</CategoryTag>
      ))}
    </CategoryTagsContainer>
  );
}
