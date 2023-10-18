import { DEFAULT_ALL_VALUE } from "@Modules/PartnersListing/PartnersListing.constants";
import toCapital from "./toCapital";

const getListingPageMetaContent = (location: string): string => {
  // TODO: Talk with the team to replace Badsanierung after KR1.2
  if (location && location !== DEFAULT_ALL_VALUE) {
    return `Badsanierung ${
      location ? `in ${toCapital(location)}` : ""
    } - finden Sie schnell und einfach die besten Expert:innen. ✓ Kundenbewertungen ✓ kostenlos ✓ unverbindlich`;
  }
  return `Finden Sie Expert:innen für Badsanierung in ihrer Nähe ganz schnell und einfach. ✓ Kundenbewertungen ✓ kostenlos ✓ unverbindlich`;
};

export default getListingPageMetaContent;
