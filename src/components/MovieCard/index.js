import React, { useState } from 'react';

import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { NotFound } from '../../assets/NotFound.png';

const defaultImage = 'https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled.png'

import styled from 'styled-components';


const MovieCard = (item) => {
  const navigation = useNavigation();

  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate('ModalScreen', { ...item })}>
        <Picture
          defaultSource={{ uri: NotFound }}
          source={{ uri: item.backdrop_path ? `https://image.tmdb.org/t/p/original${item.backdrop_path}` : defaultImage }}
          alt={item.title}
        />
      </TouchableOpacity>
    </View>
  );
}

const Picture = styled.Image`
  margin-right: 8px;
  border-radius: 4px;
  height: 67px;
  width: 100px;
`


export default MovieCard;
