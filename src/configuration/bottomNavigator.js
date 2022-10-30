import React from 'react';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import Home from '../screens/Home';
import Search from '../screens/Search';
import Profile from '../screens/Profile';

import Icon from 'react-native-vector-icons/Ionicons';

const BottomNavigator = () => {
  const BottomStack = createMaterialBottomTabNavigator();

  return (
    <BottomStack.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = 'home'
          } else if (route.name === 'Search') {
            iconName = 'search-outline'
          } else {
            iconName = 'person-circle-outline'
          }
          return <Icon name={iconName} size={20} color={color} />;
        },
      })}
    >
      <BottomStack.Screen name="Home" component={Home} />
      <BottomStack.Screen name="Search" component={Search} />
      <BottomStack.Screen name="Profile" component={Profile} />
    </BottomStack.Navigator >
  )
}


export default BottomNavigator