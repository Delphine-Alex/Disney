import React, { useEffect, useState } from 'react';

import { Button, Image, StyleSheet, Text, View } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

const defaultImage = 'https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled.png'

import { NotFound } from '../../assets/NotFound.png';


const ModalScreen = (item) => {

  // const bannerStyle = {
  //   backgroundImage: `url(${item.backdrop_path ? `https://image.tmdb.org/t/p/original/${item.backdrop_path}` : "https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled.png"})`,
  // }

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
        console.log('le film n existe pas');
        movieArray.push(movieToInsert)
      } else {
        console.log('le film existe');
        movieArray.splice(checkId, 1)
      }
      await AsyncStorage.setItem('favorite', JSON.stringify(movieArray));
    }

    else {
      movieArray.push(movieToInsert)
      await AsyncStorage.setItem('favorite', JSON.stringify(movieArray));
    }
  }

  useEffect(() => {
    const getData = async () => {
      try {
        const storage = JSON.parse(await AsyncStorage.getItem('favorite'));
        console.log('favorite is:', storage)
      } catch (error) {
        console.log('error:', error)
      }
    }
    getData();
  }, []);

  return (
    <View>
      <Image
        defaultSource={{ uri: NotFound }}
        source={{ uri: item.route.params.backdrop_path ? `https://image.tmdb.org/t/p/original${item.route.params.backdrop_path}` : defaultImage }}
        style={styles.pictures}
        alt={item.title}
      />
      <Text>{item && item.route.params.title || item && item.route.params.original_title}</Text>
      <Text>{item && item.route.params.overview || 'No description for now'}</Text>

      <Button title='Lecture' type='button' />
      <Button title='Add' type='button' onPress={() => addToFavorite(item.route.params)} />
    </View>
  );
}

const styles = StyleSheet.create({
  pictures: {
    width: 67,
    height: 100
  }
})


export default ModalScreen;
