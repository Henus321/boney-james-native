import {NavigationProp} from '@react-navigation/native';

export type RouterProps = {
  navigation: NavigationProp<any, any>;
};

export type RootStackParamList = {
  AppScreen: undefined;
  ItemScreen: {slug: string} | undefined;
};

export type BottomTabsStackParamList = {
  CollectionScreen: {name: string; title: string; icon: string};
  ShopsScreen: undefined;
  CustomersScreen: undefined;
  ProfileScreen: undefined;
};

export type BottomTabsListType = {
  name: keyof BottomTabsStackParamList;
  title: string;
  icon: string;
  component: () => React.JSX.Element;
};
