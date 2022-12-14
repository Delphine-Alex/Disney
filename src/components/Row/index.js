import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { Button, FlatList, ScrollView, Text, View } from 'react-native';

import MovieCard from '../MovieCard';

import styled from 'styled-components';


const Row = (props) => {
  const [movies, setMovies] = useState([]);

  const apiUrl = 'https://api.themoviedb.org/3';
  const apiKey = 'fd7bff04ac1e8d64d6c38c9200b46fb8';

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
    } else if (props.title === "Prochainement sur Disney +") {
      const getMovies = async () => {
        try {
          const result = await axios.get(`${apiUrl}/movie/upcoming?api_key=${apiKey}`)
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
    <Container>
      <Title>{props.title}</Title>
      <ScrollView horizontal={true}>
        {movies.map((item, key) => {
          return (
            <MovieCard {...item} key={item.id} />
          )
        })}
      </ScrollView>
    </Container>
  );
}

const Container = styled.View`
  padding: 6% 6% 2.5% 6%;
`

const Title = styled.Text`
  color: ${props => props.theme.ligthGreyColor}
  margin-bottom: 2%;
  font-weight: 600;
  font-size: 16px;
`


export default Row;
