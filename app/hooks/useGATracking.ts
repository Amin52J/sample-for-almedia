import { useRouter } from "next/router";
import { useCallback, useState } from "react";
import ReactGA from "react-ga";
import useConsent from "./useConsent";
import { GA_ID, CUSTOM_DIMENSION_MAP } from "./useGATracking.constants";
import type { EventOptions, GATrakingProps } from "./useGATracking.d";

const useGATracking = ({ vendorUuid = null, slug = null }: GATrakingProps) => {
  const [eventIsSent, setEventIsSent] = useState(false);
  const { asPath } = useRouter();
  const { consentStatus: gaConsentStatus } = useConsent(GA_ID);

  const setVendorData = (dimension14: string) => {
    ReactGA.ga("set", {
      appName: "Aroundhome Partner Profiles",
      anonymizeIp: true,
      dimension14,
    });
  };

  const sendPageView = (pathname: string) => {
    ReactGA.pageview(pathname);
  };

  const sendEvent = useCallback(
    (event: EventOptions, customDimensions = {}) => {
      if (gaConsentStatus) {
        const dimensions = Object.entries(CUSTOM_DIMENSION_MAP).reduce(
          (acc, [key, value]) => ({ ...acc, [value]: customDimensions[key] }),
          {},
        );

        ReactGA.ga("send", "event", {
          eventCategory: event.category || "Partner_Profile_Pages",
          eventAction: event.action,
          eventLabel: event.label,
          eventValue: Number(event.value || 0),
          ...dimensions,
        });
      }
    },
    [gaConsentStatus],
  );

  const initializeGATracker = () => {
    if (!eventIsSent && gaConsentStatus) {
      ReactGA.initialize(process.env.NEXT_PUBLIC_GA_TRACKING_ID);
      sendPageView(asPath);
      if (vendorUuid && slug) {
        setVendorData(vendorUuid);
        sendEvent(
          {
            action: "Visit Page",
            label: slug,
          },
          { vendorUuid },
        );
      } else {
        sendEvent(
          {
            action: "Visit Page",
            label: "Listing",
            category: "Partner_Listing_Pages",
          },
          {},
        );
      }
      setEventIsSent(true);
    }
  };

  return {
    sendEvent,
    initializeGATracker,
    gaConsentStatus,
  };
};

export default useGATracking;
