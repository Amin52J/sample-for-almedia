export type ShortProfile = {
  companyName: string;
  logoUrl: { default: string };
  products: { name: string }[];
  description: string;
  slug: string;
  rating: number;
  ratingsCount: number;
  street: string;
  city: string;
  zipcode: string;
  distance?: string;
  images?: string[];
  badges?: string[];
  phone?: string;
  latitude?: number;
  longitude?: number;
};

export type Product = {
  name: string;
};

export type ProductsListProps = { products: Product[] };

export interface DynamicLinkProps {
  dynamicLinks: {
    title: string;
    href: string;
  }[];
  loading: boolean;
}

export interface PartnersListingProps {
  profiles: ShortProfile[];
  products: Product[];
  totalCount: number;
  currentPage: number;
  product?: string;
  location?: string;
  latitude?: number;
  longitude?: number;
  isValidRoute?: boolean;
  loading?: boolean;
  dynamicLinks: {
    title: string;
    href: string;
  }[];
}

export interface PartnerCardsProps {
  profiles: ShortProfile[];
}

export interface PartnerCardsInfiniteScrollProps {
  profiles: ShortProfile[];
  hasMorePages: boolean;
  currentPage: number;
}

export interface PartnersListingHeaderProps {
  selectedPage: number;
  pageLimit: number;
  totalCount: number;
}

export type SortingListItemProps = {
  theme: DefaultTheme;
  isChecked: boolean;
};

export type PartnerSortingProps = {
  isDisabled?: boolean;
};

export interface SortProps {
  sortBy: string;
  sortOrder: string;
}

export interface SortingOptionProps {
  label: string;
  value: string;
}
