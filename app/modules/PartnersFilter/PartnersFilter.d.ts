export interface PartnerFilterProps {
  product: string;
  location: string;
}

export interface ProductFilterProps {
  product: string;
  onChange: () => void;
}

type FilterLabels = "Alle Fachfirmen" | "product" | "location";

export type PartnersFilterItem = {
  label: FilterLabels;
  value: string;
};

export interface ProviderProps {
  children?: React.ReactElement;
}

export interface ListItemProps {
  theme: DefaultTheme;
  index?: number;
  activeIndex?: number;
}

export interface LocationProps {
  label: string;
  value: string;
}

export interface RadiusProps {
  label: string;
  value: number;
}

export interface GeoLocationProps {
  location: string;
  latitude: number | null;
  longitude: number | null;
  radiusInKm: number | null;
}

export interface PartialTitleProps {
  index: number;
  item: PartnersFilterItem;
}
