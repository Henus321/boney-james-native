import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from '../models';

import ItemScreen from '../screens/ItemScreen';
import BottomTabs from './BottomTabs';

const Stack = createNativeStackNavigator<RootStackParamList>();

function AppStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="AppScreen"
          component={BottomTabs}
          options={{headerShown: false, headerTitle: 'Коллекция'}}
        />
        <Stack.Screen
          name="ItemScreen"
          component={ItemScreen}
          options={{headerTitle: 'Пальто'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppStack;
