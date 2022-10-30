import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import BottomNavigator from './bottomNavigator';
import ModalScreen from '../components/ModalScreen';

import Home from './../screens/Home';
import Login from '../screens/Login';
import Video from '../screens/Video';

const RootStack = createStackNavigator();

const Routes = () => {

  return (
    <NavigationContainer >
      <RootStack.Navigator screenOptions={{ headerShown: false }} initialRouteName={'Login'}>
        <RootStack.Screen name="Video" component={Video} />
        <RootStack.Screen name="BottomNavigator" component={BottomNavigator} />
        <RootStack.Screen name="Login" component={Login} />
        <RootStack.Group
          screenOptions={{
            presentation: 'modal',
            // headerShown: true
          }}>
          <RootStack.Screen name="ModalScreen" component={ModalScreen} />
        </RootStack.Group>
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
