import { Profile } from "@Shared/types/profile";

export interface GAContext {
  sendContactPageWebsiteEvent: () => void;
  sendAggregateRatingsLinkEvent: () => void;
  sendServiceButtonEvent: (id: string) => void;
  sendInfoColumnEvent: (id: string) => void;
  sendProfileTabEvent: (eventLabel: string) => void;
}

export interface ProviderProps {
  children?: React.ReactElement;
  profile: Profile;
}
