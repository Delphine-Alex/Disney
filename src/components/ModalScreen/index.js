import React, { useState } from 'react';

import { Button, Image, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import AsyncStorage from '@react-native-async-storage/async-storage';

const defaultImage = 'https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled.png'

import { NotFound } from '../../assets/NotFound.png';

import getFavorite from '../../utils/getFavorite';

import styled from 'styled-components';

import Add from 'react-native-vector-icons/Ionicons';
import Group from 'react-native-vector-icons/MaterialCommunityIcons';

const ModalScreen = (item) => {
  const navigation = useNavigation();

  const isInFavorite = async element => { };

  const addToFavorite = async element => {
    const localFavorite = await getFavorite();

    const index = localFavorite.findIndex(item => item.id === element.id);

    if (index === -1) {
      localFavorite.push(element);
      await AsyncStorage.setItem('favorite', JSON.stringify(localFavorite));
    } else {
      localFavorite.splice(index, 1);
      await AsyncStorage.setItem('favorite', JSON.stringify(localFavorite));
    }
  };

  return (
    <Container>
      <Picture
        defaultSource={{ uri: NotFound }}
        source={{ uri: item.route.params.backdrop_path ? `https://image.tmdb.org/t/p/original${item.route.params.backdrop_path}` : defaultImage }}
        alt={item.title}
      />
      <Title>{item && item.route.params.title || item && item.route.params.original_title}</Title>

      <PlayButton>
        <Button title='Lecture' type='button' onPress={() => navigation.navigate('Video', { id: item.route.params.id })} ></Button>
      </PlayButton>

      <Icons>
        <Icon>
          <Add name='add' size={30} onPress={() => addToFavorite(item.route.params)} />
          <IconDescription onPress={() => addToFavorite(item.route.params)}>Ma Liste</IconDescription>
        </Icon>
        <Icon>
          <Group name='account-group' size={30} />
          <IconDescription>GroupWatch</IconDescription>
        </Icon>
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

const Icon = styled.View`
  margin: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
