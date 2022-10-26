import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { Button, FlatList, Text, View } from 'react-native';

const Row = (props) => {
  const [movies, setMovies] = useState([]);

  const apiUrl = 'https://api.themoviedb.org/3';
  const apiKey = 'fd7bff04ac1e8d64d6c38c9200b46fb8'

  useEffect(() => {
    const getMovies = async () => {
      try {
        const result = await axios.get(`${apiUrl}/discover/movie?api_key=${apiKey}&with_genres=27`)
        setMovies(result.data.results);
      } catch (error) {
        console.log(error)
      }
    }
    getMovies();
  }, []);

  return (
    <View>
      <FlatList
        data={movies}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          // <TouchableOpacity onPress={() => navigation.navigate('Character')}>
          <Text>{item.title}</Text>
          // </TouchableOpacity>
        )}
      />
    </View>
  );
}

export default Row;
