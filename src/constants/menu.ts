import {BottomTabsListType} from '../models';

import CollectionScreen from '../screens/CollectionScreen';
import CustomersScreen from '../screens/CustomersScreen';
import ProfileScreen from '../screens/ProfileScreen';
import ShopsScreen from '../screens/ShopsScreen';

export const BottomTabsList: BottomTabsListType[] = [
  {
    name: 'CollectionScreen',
    title: 'Коллекция',
    icon: 'calendar',
    component: CollectionScreen,
  },
  {
    name: 'ShopsScreen',
    title: 'Магазины',
    icon: 'calendar',
    component: ShopsScreen,
  },
  {
    name: 'CustomersScreen',
    title: 'Покупателям',
    icon: 'calendar',
    component: CustomersScreen,
  },
  {
    name: 'ProfileScreen',
    title: 'Профиль',
    icon: 'calendar',
    component: ProfileScreen,
  },
];
