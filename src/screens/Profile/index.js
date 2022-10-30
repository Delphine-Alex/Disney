import React, { useEffect } from 'react';

import { Avatar } from 'react-native-elements';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Button, ScrollView, Text, Touchable, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import verifyIfUserIsConnected from '../../utils/verifyIfUserIsConnected';

import Raiponce from '../../assets/Raiponce.jpeg';

import styled from 'styled-components';

import Icon from 'react-native-vector-icons/Ionicons';


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

      <Picture>
        <Avatar
          rounded
          source={Raiponce}
          size={125}
        />
      </Picture>

      <TouchableOpacity onPress={() => navigation.navigate('Favorite')}>
        <Content>
          <Title>Ma liste</Title>
          <Icon name='ios-arrow-forward-circle' size={25} />
        </Content>
      </TouchableOpacity>

      <Diviser />

      <TouchableOpacity onPress={disconnect}>
        <Content>
          <Title>Se déconnecter</Title>
          <Icon name='ios-arrow-forward-circle' size={25} />
        </Content>
      </TouchableOpacity>
    </Container >
  );
}

const Container = styled.View`
  background-color: ${props => props.theme.backgroundColor};
  padding: 6%;
  height: 100%;
`

const Picture = styled.View`
  padding: 25%;
  align-items: center;
`

const Title = styled.Text`
  color: ${props => props.theme.primaryColor};
  padding: 2% 0 2% 0;
  font-weight: 600;
  font-size: 16px;
`

const Content = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

const Diviser = styled.View`
  background-color: ${props => props.theme.primaryColor};
  border-bottom-width: 2px;
  margin: 2% 0 2% 0;
`


export default Profile;
