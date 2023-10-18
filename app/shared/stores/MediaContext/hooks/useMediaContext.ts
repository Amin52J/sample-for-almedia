import { MediaContext } from "@Shared/stores/MediaContext/MediaContext";
import { DESKTOP_S, MOBILE_M, TABLET } from "./MediaContext.constants";
import useMatchMedia from "./useMatchMedia";

const useMediaContext = (): MediaContext => {
  const isDesktop = useMatchMedia(DESKTOP_S);
  const isTablet = useMatchMedia(TABLET);
  const isMobile = useMatchMedia(MOBILE_M);

  return {
    isDesktop,
    isTablet,
    isMobile,
  };
};

export default useMediaContext;
