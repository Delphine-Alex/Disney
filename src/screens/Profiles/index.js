import React, { useEffect, useState } from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { FlatList, ScrollView, Text, View } from 'react-native';

import MovieCard from '../../components/MovieCard';

import styled from 'styled-components';


const Profiles = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const getFavorites = async () => {
      setFavorites(JSON.parse(await AsyncStorage.getItem('favorite')) || []);
    }
    getFavorites();
  }, []);

  return (
    <Container>
      <ScrollView>
        <Title>Mes films et séries</Title>
        {favorites ?
          (favorites.map((item) => {
            return (
              <MovieCard {...item} />
            )
          })
          ) : (
            ""
          )
        }
      </ScrollView>
    </Container>
  );
}

const Container = styled.View`
  background-color: #262940;
  padding: 6%;
  height: 100%;
`

const Title = styled.Text`
  margin-bottom: 2%;
  font-weight: 600;
  font-size: 16px;
  color: #C6C6C6;
`

export default Profiles;
