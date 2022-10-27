import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
// import { MaterialCommunityIcons } from '@expo/vector-icons';

import Home from '../screens/Home';
// import HomeStack from '../configuration/homeStack';

import Search from '../screens/Search';
import Downloads from '../screens/Downloads';
import Profiles from '../screens/Profiles';

const Routes = () => {
  const BottomStack = createMaterialBottomTabNavigator();

  return (
    <NavigationContainer>
      <BottomStack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <BottomStack.Screen
          options={{
            tabBarLabel: 'Test',
          }}
          name="Home"
          component={Home} />
        {/* <BottomStack.Screen name="HomeStack" component={HomeStack} /> */}
        <BottomStack.Screen
          options={{
            tabBarLabel: 'Test1',
          }}
          name="Search" component={Search} />
        <BottomStack.Screen
          options={{
            tabBarLabel: 'Test2',
          }}
          name="Downloads" component={Downloads} />
        <BottomStack.Screen
          options={{
            tabBarLabel: 'Test3',
          }} name="Profiles" component={Profiles} />
      </BottomStack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
