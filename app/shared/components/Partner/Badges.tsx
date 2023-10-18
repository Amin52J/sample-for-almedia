import React from "react";
import useMediaContext from "@Shared/stores/MediaContext/hooks/useMediaContext";
import AroundhomePartner from "./AroundhomePartner";
import { TagsStyles, BadgesArea, BadgeLogo } from "./Partner.styles";

const Badges = ({ badges, slug }) => {
  const { isDesktop } = useMediaContext();

  return (
    <BadgesArea>
      {badges.map((badge: string) =>
        isDesktop ? (
          <TagsStyles size="xs" iconLeft={AroundhomePartner} key={slug} isBadge>
            {badge}
          </TagsStyles>
        ) : (
          <BadgeLogo key={slug} />
        ),
      )}
    </BadgesArea>
  );
};

export default Badges;
