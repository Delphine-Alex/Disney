import React, { useEffect, useState } from 'react';
import axios from 'axios';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { Button, TextInput, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import LogoDisney from '../../assets/LogoDisney.png';

import styled from 'styled-components';


const Login = () => {
  const [user, setUser] = useState({});
  const navigation = useNavigation();

  const submitLogin = async (text) => {
    text.preventDefault();

    const url = 'https://easy-login-api.herokuapp.com/users/login';
    try {
      const result = await axios.post(url, user);

      const token = result.headers["x-access-token"];

      if (result && result.headers && result.headers["x-access-token"]) {
        await AsyncStorage.setItem('token', token)
        navigation.navigate('BottomNavigator', { screen: 'Home' })
      }
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <Container>
      <LogoContainer>
        <Logo source={LogoDisney} alt='Logo Disney +' />
      </LogoContainer>
      <Title>Identifier-vous avec votre nom d'utilisateur et mot de passe</Title>
      <SubTitle>
        Cette adresse-mail et ce mot de passe vous permettront de vous identifier sur votre compte Disney+
        pour bénéficier de vos séries et films préférés.
      </SubTitle>

      <View>
        <Input
          label='Username'
          name='username'
          id='username'
          type='username'
          rsecureTextEntry={false}
          placeholder='Username'
          onChangeText={(text) => setUser({ ...user, username: text })}
        />

        <Input
          label='Password'
          name='password'
          id='password'
          type='password'
          secureTextEntry={true}
          placeholder='Mot de passe'
          onChangeText={(text) => setUser({ ...user, password: text })}
        />

        <SignInButton>
          <Button title='CONTINUER' type='submit' onPress={(e) => submitLogin(e)} />
        </SignInButton>
      </View>
      <SignIn>Nouveau sur Disney+ ? <SignInColor>S'INCRIRE</SignInColor></SignIn>
    </Container>
  );
}

const Container = styled.View`
  background-color: ${props => props.theme.backgroundColor};
  padding: 0 6% 2.5% 6%;
  height: 100%;
`

const LogoContainer = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Logo = styled.Image`
  margin-top: 6%;
  width: 200px;
  height: 100px;
`

const Title = styled.Text`
  color: ${props => props.theme.ligthGreyColor};
  font-weight: 600;
  line-height: 40;
  font-size: 24px;
`
const SubTitle = styled.Text`
  color: ${props => props.theme.ligthGreyColor};
  margin-top: 10px;
  line-height: 25;
`

const Input = styled.TextInput`
  background-color: ${props => props.theme.primaryColor};
  border-radius: 4px;
  margin: 6% 0 2.5% 0;
  height: 50px;
`

const SignInButton = styled.TouchableOpacity`
  background-color: ${props => props.theme.blueColor};
  border-radius: 4px;
  margin-top: 6%;
  padding: 8px;
`

const SignIn = styled.Text`
  color: ${props => props.theme.ligthGreyColor};
  margin-top: 18px;
`

const SignInColor = styled.Text`
  color: ${props => props.theme.primaryColor};
`


export default Login;
