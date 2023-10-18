import { Profile } from "@Shared/types/profile";
import { VendorAverage } from "@Shared/types/rating";

export interface Links {
  url: string;
  label: string;
  activeOnSubUrls?: boolean;
  eventLabel?: string;
}

export interface NavigationLinkProps {
  className: string;
  href: string;
  label: string;
  links: Links[];
}

export interface LayoutProps {
  profile: Profile;
  vendorAverage: VendorAverage;
  children?: React.ReactElement;
}

export interface RatingProps {
  ratingConnection: RatingConnection;
  vendorAverage: VendorAverage;
}

export interface ProfileHeadProps extends LayoutProps {
  ratingProps: RatingProps;
}
