import {ItemOptionsType} from '../models';

export const getTitlePhoto = (
  options: ItemOptionsType[],
  activeColor: ItemOptionsType['colorHex'],
) => options.find(option => option.colorHex === activeColor)?.photos[0];
