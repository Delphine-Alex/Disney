import React, { useEffect, useState } from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { FlatList, Text, View } from 'react-native';

import MovieCard from '../../components/MovieCard';

import styled from 'styled-components';


const Profiles = () => {
  const [movies, setMovies] = useState([]);

  useEffect(async () => {
    setMovies(JSON.parse(await AsyncStorage.getItem('favorite')));
  }, []);

  return (
    <Container>
      {
        movies ? (
          <Test
            data={movies}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <MovieCard {...item} />
            )}
          />
        ) : (
          ""
        )
      }
    </Container>
  );
}

const Container = styled.View`
  background-color: #262940;
  height: 100%;
`

const Test = styled.FlatList`
  /* border: 2px solid red; */
  display : flex;
  /* flex-wrap: wrap;
  justify-content: space-between; */
`

export default Profiles;
