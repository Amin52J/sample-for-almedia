import {
  TEXT_LIMIT_DESKTOP,
  TEXT_LIMIT_MOBILE,
} from "@Shared/stores/MediaContext/hooks/MediaContext.constants";
import useMediaContext from "@Shared/stores/MediaContext/hooks/useMediaContext";

const useEllipsis = (text: string) => {
  const { isDesktop } = useMediaContext();
  const textLimit = isDesktop ? TEXT_LIMIT_DESKTOP : TEXT_LIMIT_MOBILE;
  const overflow = text.length >= textLimit;
  const slicedText = overflow ? `${text.slice(0, textLimit)}...` : text;

  return {
    overflow,
    slicedText,
  };
};

export default useEllipsis;
