import React from 'react';

import { Button, Image, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Row from '../../components/Row';

import { LogoDisney } from '../../assets/LogoDisney.png'

import styled from 'styled-components';
import { ScrollView } from 'react-native-gesture-handler';


const Home = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <ScrollView>
        <Logo source={LogoDisney} alt='Logo Disney +' />
        <Row title="Tendances" />
        <Row title="Action et Aventure" />
        <Row title="Horreur" />
      </ScrollView>
    </Container>
  );
}

const Container = styled.View`
  background-color: #262940;
  height: 100%;
`

const Logo = styled.Image`
  border: 2px solid red;
  width: 200px;
  height: 100px;
`

export default Home;
