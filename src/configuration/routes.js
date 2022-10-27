import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

// Create a ModalScreen
import { createStackNavigator } from '@react-navigation/stack';

import BottomNavigator from './bottomNavigator';
import ModalScreen from '../components/ModalScreen';

import Home from './../screens/Home';
const RootStack = createStackNavigator();

const Routes = () => {

  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen name="BottomNavigator" component={BottomNavigator} />
        <RootStack.Group screenOptions={{ presentation: 'modal' }}>
          <RootStack.Screen name="ModalScreen" component={ModalScreen} />
        </RootStack.Group>
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
