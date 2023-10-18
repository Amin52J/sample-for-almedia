const toCapital = (str: string): string => {
  const strArray = str ? str.split(" ") : [];
  const lowerArray = strArray.map((strItem) => strItem.toLowerCase());
  const capitalArray = strArray.map((strItem) =>
    strItem.charAt(0).toUpperCase(),
  );
  return capitalArray
    .map((strItem, index) => strItem + lowerArray[index].slice(1))
    .join(" ");
};

export default toCapital;
