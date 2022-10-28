import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { Button, FlatList, Text, View } from 'react-native';

import MovieCard from '../MovieCard';

import styled from 'styled-components';

const Test = styled.View`
  padding: 3.75%;
`

const Test2 = styled.Text`
  color: red;
`
// const Test3 = styled.FlatList`
//   display: flex;
//   align-items: center;
//   overflow-x: visible;
//   overflow-y: hidden;
//   width: 100%;
// `

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
    <Test>
      <Test2>{props.title}</Test2>
      <FlatList
        data={movies}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <MovieCard {...item} />
        )}
      />
    </Test>
  );
}

export default Row;
