import React from 'react';

import { Image, StyleSheet, Text, View } from 'react-native';

const defaultImage = 'https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled.png'

import { NotFound } from '../../assets/NotFound.png';


const ModalScreen = (item) => {

  // const bannerStyle = {
  //   backgroundImage: `url(${item.backdrop_path ? `https://image.tmdb.org/t/p/original/${item.backdrop_path}` : "https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled.png"})`,
  // }

  console.log('item', item);
  console.log('route:', item.route.params);
  console.log('title:', item.route.params.title);

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
