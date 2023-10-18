import React, { createContext } from "react";
import useGAContext from "./hooks/useGAContext";
import type { GAContext, ProviderProps } from "./GAContext";

const gaContext = createContext<GAContext>({} as GAContext);

const GAContextProvider = ({ children, profile }: ProviderProps) => {
  const { vendorUuid, slug } = profile;

  const gaState = useGAContext(vendorUuid, slug);

  return <gaContext.Provider value={gaState}>{children}</gaContext.Provider>;
};

export default GAContextProvider;
