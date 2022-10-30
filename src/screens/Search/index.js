import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { Button, Image, TextInput, FlatList, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import verifyIfUserIsConnected from '../../utils/verifyIfUserIsConnected';

import MovieCard from '../../components/MovieCard';

import { NotFound } from '../../assets/NotFound.png';

const defaultImage = 'https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled.png'

import styled from 'styled-components';


const Search = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const navigation = useNavigation();

  useEffect(() => {
    verifyIfUserIsConnected(navigation);
  }, []);

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
              <SearchContent key={item.id}>

                <MovieCard {...item} />

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
  background-color: ${props => props.theme.backgroundColor};
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
  background-color: ${props => props.theme.primaryColor};
  border-radius: 4px;
  margin-right: 10px;
  height: 34px;
  width: 78%;
  padding: 2%;
`

const SearchButton = styled.TouchableOpacity`
  background-color: ${props => props.theme.primaryColor};
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
  color: ${props => props.theme.primaryColor};
  font-weight: 600;
  font-size: 14px;
`

const Date = styled.Text`
  margin-top: 4%;
  font-size: 10px;
  color: ${props => props.theme.ligthGreyColor};
`

export default Search;
