import React, { useState } from 'react';
import axios from 'axios';

import { useNavigation } from '@react-navigation/native';

import { Button, Image, TextInput, FlatList, ScrollView, Text, TouchableOpacity, View } from 'react-native';

import { NotFound } from '../../assets/NotFound.png';

import MovieCard from '../../components/MovieCard';

const defaultImage = 'https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled.png'

import styled from 'styled-components';


const Search = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const navigation = useNavigation();

  const apiUrl = "https://api.themoviedb.org/3"
  const apiKey = "fd7bff04ac1e8d64d6c38c9200b46fb8";

  const handleSubmit = (text) => {
    text.preventDefault();

    const getMovies = async () => {
      try {
        const result = await axios.get(`${apiUrl}/search/movie?api_key=${apiKey}&query=` + searchTerm)
        setMovies(result.data.results);
        setSearchTerm('');
      } catch (error) {
        console.log(error)
      }
    }
    getMovies();
  }

  const handleOnChange = (text) => {
    setSearchTerm(text);
  }

  return (
    <Container>
      <ScrollView>

        <SearchInput>
          <Input
            name='Search'
            id='search'
            type='text'
            secureTextEntry={false}
            placeholder="Titre, personnage ou genre"
            onChangeText={handleOnChange}
          />
          <SearchButton>
            <Button title='Search' type='submit' onPress={handleSubmit} />
          </SearchButton>
        </SearchInput>

        <ScrollView>
          {movies.map((item, key) => {
            return (
              <SearchContent>

                <MovieCard {...item} key={item.id} />

                <SearchDescription>
                  <Title>{item.title}</Title>
                  <Date>{item.release_date}</Date>
                </SearchDescription>
              </SearchContent>
            )
          })}
        </ScrollView>
      </ScrollView>
    </Container>
  );
}

const Container = styled.View`
  background-color: #262940;
  height: 100%;
`

const SearchInput = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 4%;
`

const Input = styled.TextInput`
  background-color: white;
  border-radius: 4px;
  margin-right: 10px;
  height: 34px;
  width: 78%;
  padding: 2%;
`

const SearchButton = styled.TouchableOpacity`
  background-color: white;
  border-radius: 4px;
  height: 34px;
`

const SearchContent = styled.View`
  display: flex;
  flex-direction: row;
  padding: 1% 6% 1% 6%;
`

const SearchDescription = styled.View`
  margin: 4% 6% 0 2%;
`

const Title = styled.Text`
/* white-space: nowrap; */
  font-weight: 600;
  font-size: 14px;
  color: white;
`

const Date = styled.Text`
  margin-top: 4%;
  font-size: 10px;
  color: #C6C6C6;
`

export default Search;
