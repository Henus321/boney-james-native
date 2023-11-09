import {CartItemType, ItemOptionsType} from '../models';

export const getTitlePhoto = (
  options: ItemOptionsType[],
  activeColor: ItemOptionsType['colorHex'],
) => options.find(option => option.colorHex === activeColor)?.photos[0];

export const getCartItemId = (item: CartItemType) => {
  return item.slug + item.color + item.size.replace(/ /g, '');
};
