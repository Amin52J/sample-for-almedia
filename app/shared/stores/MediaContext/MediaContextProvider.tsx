import React, { createContext } from "react";
import useMediaContext from "./hooks/useMediaContext";
import type { MediaContext, ProviderProps } from "./MediaContext";

const mediaContext = createContext<MediaContext>({} as MediaContext);

const MediaContextProvider = ({ children }: ProviderProps) => {
  const mediaState = useMediaContext();
  return (
    <mediaContext.Provider value={mediaState}>{children}</mediaContext.Provider>
  );
};

export default MediaContextProvider;
