import React from 'react';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import Home from '../screens/Home';
import Search from '../screens/Search';
import Profile from '../screens/Profile';

const BottomNavigator = () => {
  const BottomStack = createMaterialBottomTabNavigator();

  return (
    <BottomStack.Navigator>
      <BottomStack.Screen name="Home" component={Home} />
      <BottomStack.Screen name="Search" component={Search} />
      <BottomStack.Screen name="Profile" component={Profile} />
    </BottomStack.Navigator>
  )
}


export default BottomNavigator