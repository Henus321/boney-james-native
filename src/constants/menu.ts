import {BottomTabsListType} from '../models';

import CollectionScreen from '../screens/CollectionScreen';
import CustomersScreen from '../screens/CustomersScreen';
import ProfileScreen from '../screens/ProfileScreen';
import ShopsScreen from '../screens/ShopsScreen';

export const BottomTabsList: BottomTabsListType[] = [
  {
    name: 'CollectionScreen',
    title: 'Коллекция',
    icon: 'list-outline',
    component: CollectionScreen,
  },
  {
    name: 'ShopsScreen',
    title: 'Магазины',
    icon: 'pricetag-outline',
    component: ShopsScreen,
  },
  {
    name: 'CustomersScreen',
    title: 'Покупателям',
    icon: 'information-circle-outline',
    component: CustomersScreen,
  },
  {
    name: 'ProfileScreen',
    title: 'Профиль',
    icon: 'person-outline',
    component: ProfileScreen,
  },
];
