export interface ProfileCitiesQueryProps {
  product: string | string[];
  location: string | string[];
  latitude: number;
  longitude: number;
  radiusInKm: number;
}
export interface ProfileCitiesQueryByLocationProps {
  latitude: number;
  longitude: number;
  radiusInKm: number;
}

export interface ProfileCitiesQueryByProductProps {
  productVariable: string;
}

export interface ProfileCitiesQueryByAllProps {
  productVariable: string;
  latitude: number;
  longitude: number;
  radiusInKm: number;
}
