import React, { useEffect } from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { Button, ScrollView, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import verifyIfUserIsConnected from '../../utils/verifyIfUserIsConnected';

import styled from 'styled-components';


const Profile = () => {
  const navigation = useNavigation();

  useEffect(() => {
    verifyIfUserIsConnected(navigation);
  }, []);

  const disconnect = async () => {
    await AsyncStorage.removeItem('token');
    navigation.navigate('Login');
  };

  return (
    <Container>
      <Button title='Ma Liste' onPress={() => navigation.navigate('Favorite')} />
      <View
        style={{
          borderBottomColor: 'black',
          // borderBottomWidth: StyleSheet.hairlineWidth,
        }}
      />
      <Button title='Se déconnecter' onPress={disconnect} />
    </Container >
  );
}

const Container = styled.View`
  background-color: ${props => props.theme.backgroundColor};
  padding: 6%;
  height: 100%;
`

export default Profile;
