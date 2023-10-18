import { useEffect, useState } from "react";

type MediaObj = {
  matches: boolean;
};

const useMatchMedia = (query: string) => {
  const [isMatching, setIsMatching] = useState(true);

  useEffect(() => {
    const media = window.matchMedia(query);
    setIsMatching(media.matches);

    const listener = (mediaObj: MediaObj) => {
      setIsMatching(mediaObj.matches);
    };

    media.addEventListener("change", listener);

    return () => media.removeEventListener("change", listener);
  }, [query]);

  return isMatching;
};

export default useMatchMedia;
