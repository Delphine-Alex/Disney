import React, { useState } from 'react';

import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import Modal from '../Modal';

import { NotFound } from '../../assets/NotFound.png';

const defaultImage = 'https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled.png'

const MovieCard = (item) => {
  const [showModal, setShowModal] = useState();
  const navigation = useNavigation();

  const handleClick = (showModalId) => {
    setShowModal(showModalId)
  };

  console.log('item:', item);

  return (
    <View>
      <View>
        <Text>{item && item.title}</Text>
        <TouchableOpacity>
          <Image
            defaultSource={{ uri: NotFound }}
            source={{ uri: item.backdrop_path ? `https://image.tmdb.org/t/p/original${item.backdrop_path}` : defaultImage }}

            onPress={() => handleClick(item.id)}
            style={styles.pictures}
            alt={item.title}
          />
        </TouchableOpacity>
      </View>
      {showModal === item.id && <Modal showModal={() => handleClick(item.id)} onClose={() => handleClick(undefined)} item={item} />}
    </View>
  );
}

const styles = StyleSheet.create({
  pictures: {
    width: 67,
    height: 100
  }
})

export default MovieCard;
