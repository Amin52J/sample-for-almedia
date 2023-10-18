import { useState } from "react";
import { LocationProps } from "@Modules/PartnersFilter/PartnersFilter.d";
import useLocation from "./useLocation";

const useKeyChange = (suggestions: LocationProps[]) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { onLocationSelect } = useLocation();

  const onKeyChange = (e: KeyboardEvent) => {
    switch (e.key) {
      case "Enter":
        onLocationSelect(suggestions[activeIndex]);
        setActiveIndex(0);
        break;
      case "ArrowUp":
        if (activeIndex === 0) {
          return;
        }
        setActiveIndex(activeIndex - 1);
        break;
      case "ArrowDown":
        if (activeIndex - 1 === suggestions.length) {
          setActiveIndex(0);
          return;
        }
        setActiveIndex(activeIndex + 1);
        break;
      default:
        break;
    }
  };

  return {
    onKeyChange,
    activeIndex,
  };
};

export default useKeyChange;
