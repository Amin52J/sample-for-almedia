export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type AwardImage = {
  __typename?: "AwardImage";
  imageUrls?: Maybe<Array<Scalars["String"]>>;
};

export type ContactImageUrl = {
  __typename?: "ContactImageUrl";
  default?: Maybe<Scalars["String"]>;
};

export type LogoUrl = {
  __typename?: "LogoUrl";
  default?: Maybe<Scalars["String"]>;
  small?: Maybe<Scalars["String"]>;
  verySmall?: Maybe<Scalars["String"]>;
};

export type PartnerNotificationSettings = {
  __typename?: "PartnerNotificationSettings";
  enabledForNewRating: Scalars["Boolean"];
  enabledForUpdatedRating: Scalars["Boolean"];
};

export type Product = {
  __typename?: "Product";
  name: Scalars["String"];
};

export type Profile = {
  __typename?: "Profile";
  active: Scalars["Boolean"];
  awardImages?: Maybe<AwardImage>;
  city?: Maybe<Scalars["String"]>;
  companyName: Scalars["String"];
  contactEmail?: Maybe<Scalars["String"]>;
  contactImageUrl?: Maybe<ContactImageUrl>;
  contactLandline?: Maybe<Scalars["String"]>;
  contactMobile?: Maybe<Scalars["String"]>;
  contactPerson?: Maybe<Scalars["String"]>;
  contactPhone?: Maybe<Scalars["String"]>;
  description: Scalars["String"];
  email?: Maybe<Scalars["String"]>;
  hideRatingComments: Scalars["Boolean"];
  logoUrl?: Maybe<LogoUrl>;
  phone?: Maybe<Scalars["String"]>;
  products?: Maybe<Array<Product>>;
  referenceImages?: Maybe<ReferenceImage>;
  slug?: Maybe<Scalars["String"]>;
  slugs?: Maybe<Array<Scalars["String"]>>;
  street?: Maybe<Scalars["String"]>;
  usps: Array<Scalars["String"]>;
  vendorUuid: Scalars["String"];
  website?: Maybe<Scalars["String"]> | null;
  zipcode?: Maybe<Scalars["String"]>;
};

export type Query = {
  __typename?: "Query";
  /** Returns notification settings for a partner */
  partnerNotificationSettings: PartnerNotificationSettings;
  profile?: Maybe<Profile>;
  /** Returns a list of profiles */
  profiles: Array<Profile>;
};

export type QueryPartnerNotificationSettingsArgs = {
  vendorUuid: Scalars["String"];
};

export type QueryProfileArgs = {
  vendorUuid?: Maybe<Scalars["String"]>;
  slug?: Maybe<Scalars["String"]>;
  active?: Maybe<Scalars["Boolean"]>;
};

export type QueryProfilesArgs = {
  vendorUuids?: Maybe<Array<Scalars["String"]>>;
};

export type ReferenceImage = {
  __typename?: "ReferenceImage";
  imageUrls?: Maybe<Array<Scalars["String"]>>;
};
