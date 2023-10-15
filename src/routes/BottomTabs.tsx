import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import CollectionScreen from '../screens/CollectionScreen';
import CustomersScreen from '../screens/CustomersScreen';
import ProfileScreen from '../screens/ProfileScreen';
import ShopsScreen from '../screens/ShopsScreen';

const Tabs = createBottomTabNavigator();

function BottomTabs() {
  return (
    <Tabs.Navigator>
      <Tabs.Screen name="CollectionScreen" component={CollectionScreen} />
      <Tabs.Screen name="ShopsScreen" component={ShopsScreen} />
      <Tabs.Screen name="CustomersScreen" component={CustomersScreen} />
      <Tabs.Screen name="ProfileScreen" component={ProfileScreen} />
    </Tabs.Navigator>
  );
}

export default BottomTabs;
