import useGATracking from "@Hooks/useGATracking";
import { GAContext } from "@Shared/stores/GAContext/GAContext.d";

const useGAContext = (
  vendorUuid: string,
  slug: string | string[],
): GAContext => {
  const { sendEvent } = useGATracking({ vendorUuid, slug });

  const sendContactPageWebsiteEvent = () => {
    sendEvent(
      {
        action: "Open website",
        label: "contact tab",
      },
      { vendorUuid },
    );
  };

  const sendAggregateRatingsLinkEvent = () => {
    sendEvent(
      {
        action: "Open ratings",
        label: "summary",
      },
      { vendorUuid },
    );
  };

  const sendServiceButtonEvent = (id: string) => {
    sendEvent(
      {
        action: `Click ${id}`,
        label: "service button",
      },
      { vendorUuid },
    );
  };

  const sendInfoColumnEvent = (id: string) => {
    sendEvent(
      {
        action: `Open ${id}`,
        label: "sidebar",
      },
      { vendorUuid },
    );
  };

  const sendProfileTabEvent = (eventLabel: string) => {
    sendEvent(
      {
        action: `Open ${eventLabel}`,
        label: "profile tab",
      },
      { vendorUuid },
    );
  };

  return {
    sendContactPageWebsiteEvent,
    sendAggregateRatingsLinkEvent,
    sendServiceButtonEvent,
    sendInfoColumnEvent,
    sendProfileTabEvent,
  };
};

export default useGAContext;
