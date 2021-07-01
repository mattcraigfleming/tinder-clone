import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../screens/Home';
import Messages from '../screens/Messages';

const Stack = createStackNavigator();

export enum NavigationLayout {
  HOME_SCREEN = 'Home',
  MESSAGES_SCREEN = 'Messages',
}

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={NavigationLayout.HOME_SCREEN}>
        <Stack.Screen
          name={NavigationLayout.HOME_SCREEN}
          component={Home}
          options={{headerShown: true}}
        />
        <Stack.Screen
          name={NavigationLayout.MESSAGES_SCREEN}
          component={Messages}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
