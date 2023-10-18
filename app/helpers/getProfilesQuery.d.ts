export interface ProfileQueryProps {
  product: string | string[];
  location: string | string[];
  latitude: number;
  longitude: number;
  radiusInKm: number;
  page: number;
  active: boolean;
  sortBy: string;
  sortOrder: string;
}
