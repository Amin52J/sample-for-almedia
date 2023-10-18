import { useCallback, useEffect, useState } from "react";
import { BaseService } from "./useConsent.d";

declare global {
  interface Window {
    UC_UI: {
      getServicesBaseInfo: () => BaseService[];
      isInitialized: () => boolean;
    };
  }
}

const USERCENTRICS_WINDOW_EVENT = "utag_data";

const userCentricsLoaded = () =>
  typeof window?.UC_UI?.isInitialized === "function";

const useConsent = (serviceId: string) => {
  const [consentStatus, setConsentStatus] = useState(false);

  const readConsentStatus = useCallback(() => {
    if (userCentricsLoaded()) {
      const currentService = window.UC_UI.getServicesBaseInfo().find(
        (element) => element.id === serviceId,
      );
      setConsentStatus(!!currentService?.consent.status);
    }
  }, [serviceId]);

  useEffect(() => {
    if (userCentricsLoaded()) {
      readConsentStatus();
    } else {
      window.addEventListener("UC_UI_INITIALIZED", readConsentStatus);
    }
    window.addEventListener(USERCENTRICS_WINDOW_EVENT, readConsentStatus);

    return () => {
      window.removeEventListener("UC_UI_INITIALIZED", readConsentStatus);
      window.removeEventListener(USERCENTRICS_WINDOW_EVENT, readConsentStatus);
    };
  }, [readConsentStatus]);

  return { consentStatus };
};

export default useConsent;
