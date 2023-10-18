import { DEFAULT_ALL_VALUE } from "@Modules/PartnersListing/PartnersListing.constants";
import toCapital from "./toCapital";

const queryValueToString = (str: string | string[]): string =>
  str === DEFAULT_ALL_VALUE ? str : toCapital(str.toString());

export default queryValueToString;
