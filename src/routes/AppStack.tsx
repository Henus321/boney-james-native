import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import ItemScreen from '../screens/ItemScreen';
import BottomTabs from './BottomTabs';

const Stack = createNativeStackNavigator();

function AppStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="AppScreen"
          component={BottomTabs}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ItemScreen"
          component={ItemScreen}
          //options={{presentation: 'modal'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppStack;
