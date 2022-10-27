import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { Button, FlatList, Text, View } from 'react-native';

import MovieCard from '../MovieCard';

const Row = (props) => {
  const [movies, setMovies] = useState([]);

  const apiUrl = 'https://api.themoviedb.org/3';
  const apiKey = 'fd7bff04ac1e8d64d6c38c9200b46fb8'

  useEffect(() => {
    if (props.title === "Tendances") {
      const getMovies = async () => {
        try {
          const result = await axios.get(`${apiUrl}/movie/popular?api_key=${apiKey}`)
          setMovies(result.data.results);
        } catch (error) {
          console.log(error)
        }
      }
      getMovies();
    } else if (props.title === "Action et Aventure") {
      const getMovies = async () => {
        try {
          const result = await axios.get(`${apiUrl}/discover/movie?api_key=${apiKey}&with_genres=28,12`)
          setMovies(result.data.results);
        } catch (error) {
          console.log(error)
        }
      }
      getMovies();
    } else {
      const getMovies = async () => {
        try {
          const result = await axios.get(`${apiUrl}/discover/movie?api_key=${apiKey}&with_genres=27`)
          setMovies(result.data.results);
        } catch (error) {
          console.log(error)
        }
      }
      getMovies();
    }
  }, []);

  return (
    <View>
      <Text>{props.title}</Text>
      <FlatList
        data={movies}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <MovieCard {...item} />
        )}
      />
    </View>
  );
}

export default Row;
