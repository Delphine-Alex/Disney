import React, { useState } from 'react';

import { Button, Image, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import AsyncStorage from '@react-native-async-storage/async-storage';

const defaultImage = 'https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled.png'

import { NotFound } from '../../assets/NotFound.png';

import styled from 'styled-components';


const ModalScreen = (item) => {

  const navigation = useNavigation();

  const addToFavorite = async (element) => {

    const movieToInsert = {
      id: element.id,
      title: element.title,
      overview: element.overview,
      backdrop_path: element.backdrop_path,
    }

    const movieArray = [];

    if (await AsyncStorage.getItem('favorite')) {
      const localStorageFavorite = JSON.parse(await AsyncStorage.getItem('favorite'));
      localStorageFavorite.forEach((item) => {
        movieArray.push(item);
      });

      const checkId = movieArray.findIndex((el) => el.id === element.id);
      if (checkId === -1) {
        console.log('Film ajouté à la liste des favoris');
        movieArray.push(movieToInsert)
      } else {
        console.log('Film retiré de la liste des favoris');
        movieArray.splice(checkId, 1)
      }
      await AsyncStorage.setItem('favorite', JSON.stringify(movieArray));
    }

    else {
      movieArray.push(movieToInsert)
      await AsyncStorage.setItem('favorite', JSON.stringify(movieArray));
    }
  }

  return (
    <Container>
      <Picture
        defaultSource={{ uri: NotFound }}
        source={{ uri: item.route.params.backdrop_path ? `https://image.tmdb.org/t/p/original${item.route.params.backdrop_path}` : defaultImage }}
        alt={item.title}
      />
      <Title>{item && item.route.params.title || item && item.route.params.original_title}</Title>

      <PlayButton>
        <Button title='Lecture' type='button' onPress={() => navigation.navigate('Video', { id: item.route.params.id })} />
      </PlayButton>

      <Icons>
        <IconDescription onPress={() => addToFavorite(item.route.params)}>Ma Liste</IconDescription>
        <IconDescription>GroupWatch</IconDescription>
        <IconDescription>Télécharger</IconDescription>
      </Icons>

      <Description>{item && item.route.params.overview || 'No description for now'}</Description>
    </Container>
  );
}

const Container = styled.View`
  background-color: #262940;
  height: 100%;
`

const Title = styled.Text`
  text-align: center;
  font-weight: 600;
  font-size: 18px;
  color: #F9F9F9;
  margin: 5%;
`

const Description = styled.Text`
  font-size: 16px;
  color: #F9F9F9;
  padding: 0 6% 0 6%;
`

const Icons = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`

const IconDescription = styled.Text`
  color: #FFFFFF;
  margin: 8% 2% 8% 2%;
`

const Picture = styled.Image`
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 40%;
`

const PlayButton = styled.TouchableOpacity`
  background-color: white;
  border-radius: 4px;
  margin: 4% 6% 0 6%;
`

export default ModalScreen;
