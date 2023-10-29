import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {GlobalStyles} from '../constants/styles';
import {BottomTabsList} from '../constants/menu';
import {StyleSheet, Text} from 'react-native';
import {BottomTabsStackParamList} from '../models';
import Icon from 'react-native-vector-icons/Ionicons';

const Tabs = createBottomTabNavigator<BottomTabsStackParamList>();

function BottomTabs() {
  return (
    <Tabs.Navigator
      sceneContainerStyle={{backgroundColor: GlobalStyles.colors.milk}}>
      {BottomTabsList.map(({name, title, icon, component}) => (
        <Tabs.Screen
          key={name}
          name={name}
          component={component}
          options={{
            title: title,
            tabBarLabel: ({children, focused}) => (
              <Text
                style={[
                  styles.tabsLabel,
                  {
                    color: focused
                      ? GlobalStyles.colors.darkGrey
                      : GlobalStyles.colors.lightGrey,
                  },
                ]}>
                {children}
              </Text>
            ),
            tabBarIcon: ({size, focused}) => (
              <Icon
                name={icon}
                size={size}
                color={
                  focused
                    ? GlobalStyles.colors.darkGrey
                    : GlobalStyles.colors.lightGrey
                }
              />
            ),
          }}
        />
      ))}
    </Tabs.Navigator>
  );
}

export default BottomTabs;

const styles = StyleSheet.create({
  tabsLabel: {
    color: GlobalStyles.colors.darkGrey,
    fontSize: GlobalStyles.fonts.smallest,
  },
});
