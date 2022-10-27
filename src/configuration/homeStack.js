import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import Home from '../screens/Home';
// import Movie from '../screens/Movie';

const HomeStack = () => {

  return (
    <Stack.Navigator>
      <Stack.Screen name='Home' component={Home} />
      {/* <Stack.Screen name='Movie' component={Movie} /> */}
    </Stack.Navigator>
  );
}

export default HomeStack;
