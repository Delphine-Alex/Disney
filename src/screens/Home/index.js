import React from 'react';

import { Button, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Row from '../../components/Row';

const Home = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Row title="Tendances" />
      <Row title="Action et Aventure" />
      <Row title="Horreur" />
    </View>
  );
}

export default Home;
