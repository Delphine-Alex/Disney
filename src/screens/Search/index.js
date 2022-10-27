import React, { useState } from 'react';
import axios from 'axios';

import { useNavigation } from '@react-navigation/native';

import { Button, TextInput, FlatList, Text, TouchableOpacity, View } from 'react-native';

import MovieCard from '../../components/MovieCard';

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
    <View>

      <View>
        <TextInput
          name='Search'
          id='search'
          type='text'
          secureTextEntry={false}
          placeholder="Titre, personnage ou genre"
          onChangeText={handleOnChange}
        />
        <TouchableOpacity>
          <Button title='Rehercher' type='submit' onPress={handleSubmit} />
        </TouchableOpacity>
      </View>

      <View>
        <FlatList
          data={movies}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <MovieCard {...item} />
          )}
        />
      </View>

    </View>
  );
}

export default Search;
