import { DEFAULT_ALL_VALUE } from "@Modules/PartnersListing/PartnersListing.constants";

const removeFinalAlls = (values: string[], page: number) => {
  const newValues = [...values];
  if (page === 1) {
    const reversedArray = [...values].reverse();
    let foundAll = true;
    reversedArray.forEach((value) => {
      if (value === DEFAULT_ALL_VALUE && foundAll) {
        newValues.pop();
      } else {
        foundAll = false;
      }
    });
  }
  return newValues;
};

export default removeFinalAlls;
