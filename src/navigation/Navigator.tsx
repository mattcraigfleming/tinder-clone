import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import Home from '../screens/Home';
import Messages from '../screens/Messages';
import {NavigationLayout} from '../types/enum';

const Tab = createBottomTabNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name={NavigationLayout.HOME_SCREEN}
          component={Home}
          options={{
            tabBarIcon: ({color, size}) => (
              <Icon name="fire" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name={NavigationLayout.MESSAGES_SCREEN}
          component={Messages}
          options={{
            tabBarIcon: ({color, size}) => (
              <Icon name="envelope" color={color} size={size} />
            ),
            tabBarBadge: 3,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
