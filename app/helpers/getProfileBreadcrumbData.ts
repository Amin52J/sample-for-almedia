import toCapital from "./toCapital";
import trimPath from "./trimPath";

const BASE_URL = `${process.env.NEXT_PUBLIC_FACHFIRMEN_URL}`;

const getProfileBreadcrumbData = (
  canonicalURL: string,
  companyName?: string,
) => {
  const breadcrumbItems = canonicalURL
    .replace(/^\//, "")
    .replace(/\/$/, "")
    .split("/");

  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbItems.map((breadcrumbItem, index) => {
      const initialItemListElement = {
        "@type": "ListItem",
        position: index + 1,
        item: {
          name:
            companyName && breadcrumbItems[index - 1] === "firma"
              ? companyName
              : toCapital(breadcrumbItem),
        },
      };

      // TODO: inside the following if we need to check breadcrumbItem !== "fachfirmen", since we don't have an alle fachfirmen page in KR1.2!
      // We will remove it when we have more/all products!

      if (
        breadcrumbItem !== "firma" &&
        breadcrumbItem !== "fachfirmen" &&
        index + 1 < breadcrumbItems.length
      ) {
        return {
          ...initialItemListElement,
          item: {
            ...initialItemListElement.item,
            "@id": trimPath(
              breadcrumbItem !== "fachfirmen"
                ? `${BASE_URL}/${breadcrumbItem}/`
                : trimPath(`${BASE_URL}/`),
            ),
          },
        };
      }
      return initialItemListElement;
    }),
  });
};

export default getProfileBreadcrumbData;
