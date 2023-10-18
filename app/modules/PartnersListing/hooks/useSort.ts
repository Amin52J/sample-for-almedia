import { useEffect, useState } from "react";
import { DEFAULT_SORT } from "@Modules/PartnersListing/PartnersListing.constants";
import { SortProps } from "@Modules/PartnersListing/PartnersListing.d";
import useLocalForage from "@Hooks/useLocalForage";
import { useRouter } from "next/router";
import getCanonical from "@Helpers/getCanonical";

const useSort = () => {
  const { storedValue, setLocalForage } = useLocalForage("sort", DEFAULT_SORT);
  const [sortProps, setSortProps] = useState<SortProps>(storedValue);
  const router = useRouter();

  const onSortOrderChange = async (value: string) => {
    setLocalForage({
      ...sortProps,
      sortOrder: value,
    });
    setSortProps((prevState) => ({
      ...prevState,
      sortOrder: value,
    }));
    const { baseURLWithoutAll } = getCanonical(router.asPath, false);
    router.push(baseURLWithoutAll);
  };

  useEffect(() => {
    setSortProps(storedValue);
  }, [storedValue]);

  return {
    storedValue,
    sortProps,
    onSortOrderChange,
  };
};

export default useSort;
