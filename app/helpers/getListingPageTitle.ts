import { DEFAULT_ALL_VALUE } from "@Modules/PartnersListing/PartnersListing.constants";
import toCapital from "./toCapital";

const getListingPageTitle = (product: string, location: string): string => {
  if (location && location !== DEFAULT_ALL_VALUE) {
    return `${product ? `${toCapital(product)}: ` : ""}Top Fachfirmen${
      location ? ` in ${toCapital(location)}` : ""
    }  | Aroundhome`;
  }
  return `${toCapital(product)}: die besten Fachfirmen | Aroundhome`;
};

export default getListingPageTitle;
