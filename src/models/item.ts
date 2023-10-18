export interface IItem {
  options: IItemOptions[];
  cost: number;
  description: string;
  name: string;
  sizes: string[];
  slug: string;
}

export interface IItemOptions {
  color: string;
  id: string;
  photos: string[];
}
