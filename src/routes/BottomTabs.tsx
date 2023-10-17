import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {GlobalStyles, BottomTabsList} from '../constants';
import {StyleSheet, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Tabs = createBottomTabNavigator();

function BottomTabs() {
  return (
    <Tabs.Navigator>
      {BottomTabsList.map(({name, title, icon, component}) => (
        <Tabs.Screen
          key={name}
          name={name}
          component={component}
          options={{
            title: title,
            tabBarLabel: ({children}) => (
              <Text style={styles.tabsLabel}>{children}</Text>
            ),
            tabBarIcon: ({size}) => (
              <Icon
                name={icon}
                size={size}
                color={GlobalStyles.colors.darkGrey}
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
