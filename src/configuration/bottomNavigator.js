import React from 'react';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import Home from '../screens/Home';
import Search from '../screens/Search';
import Profiles from '../screens/Profiles';

const BottomNavigator = () => {
  const BottomStack = createMaterialBottomTabNavigator();

  return (
    <BottomStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <BottomStack.Screen name="Home" component={Home} />
      <BottomStack.Screen name="Search" component={Search} />
      <BottomStack.Screen name="Profiles" component={Profiles} />
    </BottomStack.Navigator>
  )
}


export default BottomNavigator