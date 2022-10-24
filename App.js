import React from 'react';

import { Dimensions, SafeAreaView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/screens/Home'
import Search from './src/screens/Search'

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <SafeAreaView
      style={{
        width: '100%',
        height: Dimensions.get('window').height,
      }}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName="Home">

          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Search" component={Search} />
        </Stack.Navigator>
      </NavigationContainer>

    </SafeAreaView>
  );
}

export default App;
