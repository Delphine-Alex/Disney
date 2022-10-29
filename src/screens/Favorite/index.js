import React, { useEffect, useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { FlatList, ScrollView, Text, View } from 'react-native';

import getFavorite from '../../utils/getFavorite';
import MovieCard from '../../components/MovieCard';

import styled from 'styled-components';


const Favorite = () => {
  const [favorites, setFavorites] = useState([]);

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
        <Title>Mes films et séries</Title>
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
    </Container>
  );
}

const Container = styled.View`
  background-color: ${props => props.theme.backgroundColor};
  padding: 6%;
  height: 100%;
`

const Title = styled.Text`
  color: ${props => props.theme.ligthGreyColor};
  margin-bottom: 2%;
  font-weight: 600;
  font-size: 16px;
`

const Content = styled.View`
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 2.5%;
`

export default Favorite;
