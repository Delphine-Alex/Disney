import React, { useEffect, useState } from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { FlatList, Text, View } from 'react-native';

import MovieCard from '../../components/MovieCard';

const Profiles = () => {
  const [movies, setMovies] = useState([]);

  useEffect(async () => {
    setMovies(JSON.parse(await AsyncStorage.getItem('favorite')));
  }, []);

  return (
    <View>
      {
        movies ? (
          <FlatList
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
    </View>
  );
}

export default Profiles;
