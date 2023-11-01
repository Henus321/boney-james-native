export type CollectionType = {
  collection: ItemType[];
};

export type ItemType = {
  options: ItemOptionsType[];
  cost: number;
  description: string;
  name: string;
  sizes: string[];
  slug: string;
  type: string;
};

export type ItemOptionsType = {
  color: string;
  colorHex: React.CSSProperties['backgroundColor'];
  id: string;
  photos: string[];
};

export type ShopType = {
  name: string;
  subway: string;
  street: string;
  time: string;
  phone: string;
  type: ShopOptionType;
  city: string;
};

export type ShopOptionType = {
  value: string[];
  label: string;
};
