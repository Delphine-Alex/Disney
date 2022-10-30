import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import BottomNavigator from './bottomNavigator';
import ModalScreen from '../components/ModalScreen';

import Favorite from '../screens/Favorite';
import Home from './../screens/Home';
import Login from '../screens/Login';
import Video from '../screens/Video';

const RootStack = createStackNavigator();

const Routes = () => {

  return (
    <NavigationContainer >
      <RootStack.Navigator screenOptions={{ headerShown: false }} initialRouteName={'Login'}>
        <RootStack.Screen name="Login" component={Login} />
        <RootStack.Screen name="Favorite" component={Favorite} />
        <RootStack.Screen name="BottomNavigator" component={BottomNavigator} />
        <RootStack.Screen name="Video" component={Video} />
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
