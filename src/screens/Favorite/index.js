import React, { useEffect, useState } from 'react';

import { useFocusEffect } from '@react-navigation/native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { Button, ScrollView, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import getFavorite from '../../utils/getFavorite';
import MovieCard from '../../components/MovieCard';

import styled from 'styled-components';

import Icon from 'react-native-vector-icons/Entypo';

const Favorite = () => {
  const [favorites, setFavorites] = useState([]);
  const navigation = useNavigation();

  useFocusEffect(() => {
    const getLocalFavorite = async () => {
      const favoriteLocal = await getFavorite();
      setFavorites(favoriteLocal);
    };
    getLocalFavorite();
  });

  return (
    <Container>
      <ScrollView>
        <TitleContent>
          <Icon name='arrow-with-circle-left' size={30} onPress={() => navigation.navigate('Profile')} />
          <Title>Ma liste</Title>
        </TitleContent>
        <SubTitle>Mes films et séries</SubTitle>
        <Content>
          {favorites ?
            (favorites.map((item, key) => {
              return (
                <MovieCard {...item} key={item.id} />
              )
            })
            ) : (
              ""
            )
          }
        </Content>
      </ScrollView>
    </Container >
  );
}

const Container = styled.View`
  background-color: ${props => props.theme.backgroundColor};
  padding: 6%;
  height: 100%;
`

const TitleContent = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const Title = styled.Text`
  color: ${props => props.theme.ligthGreyColor};
  margin-left: 32%;
  font-weight: 600;
  font-size: 20px;
`

const SubTitle = styled.Text`
  color: ${props => props.theme.ligthGreyColor};
  margin-top: 30px;
  font-weight: 600;
  font-size: 16px;
  padding: 2.5%;
`

const Content = styled.View`
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 3%;
`

export default Favorite;
