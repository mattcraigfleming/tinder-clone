import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Messages from '../screens/Messages';
import {NavigationLayout} from '../types/enum';

const Tab = createBottomTabNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name={NavigationLayout.HOME_SCREEN} component={Home} />
        <Tab.Screen
          name={NavigationLayout.MESSAGES_SCREEN}
          component={Messages}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
