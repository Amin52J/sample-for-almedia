const getPageNumber = (page: string | string[]) => {
  if (page)
    return typeof page === "string"
      ? parseInt(page, 10)
      : parseInt(page[0], 10);
  return 1;
};

export default getPageNumber;
