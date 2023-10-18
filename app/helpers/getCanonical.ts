import { DEFAULT_FILTERS } from "@Modules/PartnersFilter/PartnersFilter.constants";
import trimPath from "./trimPath";

const getCanonical = (path: string, hasPrefix: boolean) => {
  const prefix = hasPrefix ? process.env.NEXT_PUBLIC_BASE_PATH : "";
  const canonical = trimPath(`${prefix}${path.split("?")[0]}`);
  let baseURL = canonical;
  const pathArray = baseURL.split("/").filter((item) => item);
  const filtersCount = DEFAULT_FILTERS.length;

  if (
    pathArray.length <
    (prefix.startsWith("/") ? filtersCount + 1 : filtersCount)
  ) {
    baseURL = `${canonical}all/1/`;
  }

  baseURL = baseURL.replace(/[1-9]\/+$/, "");
  return {
    canonical: canonical.replace(/all\/1\/$|1\/$/, ""),
    baseURL,
    baseURLWithoutAll: baseURL.replace(/all\/$/, ""),
  };
};

export default getCanonical;
