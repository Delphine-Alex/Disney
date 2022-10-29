import React from 'react';

import { Button, Image, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Row from '../../components/Row';

import LogoDisney from '../../assets/LogoDisney.png'

import styled from 'styled-components';


const Home = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <LogoContainer>
        <Logo source={LogoDisney} alt='Logo Disney +' />
      </LogoContainer>
      <Row title='Prochainement sur Disney +' />
      <Row title='Tendances' />
      <Row title='Action et Aventure' />
      <Row title='Horreur' />
    </Container>
  );
}

const Container = styled.View`
  background-color: ${props => props.theme.backgroundColor};
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

export default Home;
