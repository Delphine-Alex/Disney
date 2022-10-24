import React from 'react';

import { useNavigation } from '@react-navigation/native';

import { Button, Text, TouchableOpacity, View } from 'react-native';

const Home = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Text>Hi!</Text>

      <TouchableOpacity>
        <Button
          title="Go to Search"
          onPress={() => navigation.navigate('Search')}
        />
      </TouchableOpacity>
    </View>
  );
}

export default Home;
