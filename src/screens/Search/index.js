import React from 'react';

import { useNavigation } from '@react-navigation/native';

import { Button, Text, TouchableOpacity, View } from 'react-native';

const Search = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Text>Search!</Text>

      <TouchableOpacity>
        <Button
          title="Go to Home"
          onPress={() => navigation.navigate('Home')}
        />
      </TouchableOpacity>
    </View>
  );
}

export default Search;
