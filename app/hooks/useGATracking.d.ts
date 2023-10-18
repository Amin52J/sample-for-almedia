export type EventOptions = {
  action: string;
  label?: string | string[] | null;
  category?: string | null;
  value?: number | null;
};

export type GATrakingProps = {
  vendorUuid?: string;
  slug?: string | string[];
};
