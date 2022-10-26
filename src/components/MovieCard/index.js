import React from 'react';

import { Image, StyleSheet, Text, View } from 'react-native';

const defaultImage = 'https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled.png'

const MovieCard = (item) => {

  return (
    <View>
      <Text>{item && item.title}</Text>
      <Image
        defaultSource={{ uri: defaultImage }}
        source={{ url: item.backdrop_path ? `https://image.tmdb.org/t/p/original/${item.backdrop_path}` : defaultImage }}
        style={styles.pictures}
        alt={item.title}
      />
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
