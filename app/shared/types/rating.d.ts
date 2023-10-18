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
  /** An ISO 8601-encoded datetime */
  ISO8601DateTime: any;
};

export type Customer = {
  __typename?: "Customer";
  boughtAt?: Maybe<Scalars["ISO8601DateTime"]>;
  city?: Maybe<Scalars["String"]>;
  companyName?: Maybe<Scalars["String"]>;
  firstName?: Maybe<Scalars["String"]>;
  lastName?: Maybe<Scalars["String"]>;
  leadId?: Maybe<Scalars["ID"]>;
  zipcode?: Maybe<Scalars["String"]>;
};

/** Signifies a valid specification of an order */
export enum OrderEnum {
  Desc = "DESC",
  Asc = "ASC",
}

export type Query = {
  __typename?: "Query";
  ratingConnection?: Maybe<RatingConnection>;
  vendorAverage?: Maybe<VendorAverage>;
};

export type QueryRatingConnectionArgs = {
  vendorIds?: Maybe<Array<Scalars["Int"]>>;
  vendorUuids?: Maybe<Array<Scalars["String"]>>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

export type QueryVendorAverageArgs = {
  vendorUuid: Scalars["String"];
};

export type Rating = {
  __typename?: "Rating";
  average?: Maybe<Scalars["Float"]>;
  comment?: Maybe<Scalars["String"]>;
  createdAt?: Maybe<Scalars["ISO8601DateTime"]>;
  customer?: Maybe<Customer>;
  kindness?: Maybe<Scalars["Int"]>;
  priceRatio?: Maybe<Scalars["Int"]>;
  satisfaction?: Maybe<Scalars["Int"]>;
  speedness?: Maybe<Scalars["Int"]>;
  submittedAt?: Maybe<Scalars["ISO8601DateTime"]>;
};

export type RatingConnection = {
  __typename?: "RatingConnection";
  nodes: Array<Rating>;
  totalCount?: Maybe<Scalars["Int"]>;
};

export type RatingConnectionNodesArgs = {
  page?: Maybe<Scalars["Int"]>;
  perPage?: Maybe<Scalars["Int"]>;
  order?: Maybe<OrderEnum>;
};

export type VendorAverage = {
  __typename?: "VendorAverage";
  average?: Maybe<Scalars["Float"]>;
  count?: Maybe<Scalars["Int"]>;
  kindness?: Maybe<Scalars["Float"]>;
  priceRatio?: Maybe<Scalars["Float"]>;
  satisfaction?: Maybe<Scalars["Float"]>;
  speedness?: Maybe<Scalars["Float"]>;
};
