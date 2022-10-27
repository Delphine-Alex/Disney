import React from 'react';

import { Text, StyleSheet, TouchableOpacity, View } from 'react-native';


const Modal = (item, onClose) => {

  const bannerStyle = {
    backgroundImage: `url(${item.backdrop_path ? `https://image.tmdb.org/t/p/original/${item.backdrop_path}` : "https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled.png"})`,
    // backgroundPosition: 'center',
    // backgroundSize: 'cover',
    // borderRadius: "4px 4px 0px 0px"
  }

  return (
    <>
      <View style={styles.overlay} onClick={onClose}></View>
      <View style={styles.modal} >
        <View style={styles.modal__header}>
          {/* <View style="close__cross" onClick={onClose}>
            <span></span>
            <span></span>
          </View> */}
          <Text>{item && item.title || item && item.original_title}</Text>
        </View>
        <Text>{item && item.overview || 'No description for now'}</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  overlay: {
    position: 'fixed',
    left: '0%',
    top: '0%',
    height: '100%',
    width: '100%',
    background: '#00000063',
  },
  modal: {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50 %, -50 %)',
    backgroundColor: '#181818',
    width: '58%',
    borderRadius: '4px',
  }
})


export default Modal;
