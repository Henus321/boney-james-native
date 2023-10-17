import CollectionScreen from '../screens/CollectionScreen';
import CustomersScreen from '../screens/CustomersScreen';
import ProfileScreen from '../screens/ProfileScreen';
import ShopsScreen from '../screens/ShopsScreen';

export const BottomTabsList = [
  {
    name: 'Коллекция',
    title: 'Коллекция',
    icon: 'calendar',
    component: CollectionScreen,
  },
  {
    name: 'Магазины',
    title: 'Магазины',
    icon: 'calendar',
    component: ShopsScreen,
  },
  {
    name: 'Покупателям',
    title: 'Покупателям',
    icon: 'calendar',
    component: CustomersScreen,
  },
  {
    name: 'Профиль',
    title: 'Профиль',
    icon: 'calendar',
    component: ProfileScreen,
  },
];
