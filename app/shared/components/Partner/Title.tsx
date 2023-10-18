import React from "react";
import Link from "next/link";
import Badges from "./Badges";
import { TitleArea, TitleStyles } from "./Partner.styles";

const Title = ({ companyName, badges, slug }) => (
  <TitleArea>
    <Link href={`/firma/${slug}`} passHref>
      <TitleStyles>{companyName}</TitleStyles>
    </Link>
    <Badges badges={badges} slug={slug} />
  </TitleArea>
);

export default Title;
