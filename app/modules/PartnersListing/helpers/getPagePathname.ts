import { NextRouter } from "next/router";
import { DEFAULT_ALL_VALUE } from "@Modules/PartnersListing/PartnersListing.constants";
import trimPath from "@Helpers/trimPath";

const getPagePathname = (router: NextRouter, newPage: number) => {
  const {
    query: { product, location },
  } = router;

  return trimPath(`/${product}/${location || DEFAULT_ALL_VALUE}/${newPage}`);
};

export default getPagePathname;
