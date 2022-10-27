import React from 'react';

import { useNavigation } from '@react-navigation/native';

import { Text, TouchableOpacity, View } from 'react-native';

const Movie = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Text>Hi!</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Text>Vers Home</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Movie;
