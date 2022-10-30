import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { Button, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { WebView } from 'react-native-webview';

import styled from 'styled-components';

import Icon from 'react-native-vector-icons/Ionicons'

const Video = ({ route }) => {
  const [video, setVideo] = useState({});
  const navigation = useNavigation();

  const apiUrl = 'https://api.themoviedb.org/3';
  const apiKey = 'fd7bff04ac1e8d64d6c38c9200b46fb8';

  useEffect(() => {
    const getVideo = async () => {
      try {
        const result = await axios.get(`${apiUrl}/movie/${route.params.id}/videos?api_key=${apiKey}`)
        setVideo(result.data.results[0]);
      } catch (error) {
        console.log(error)
      }
    }
    getVideo();
  }, []);

  return (
    <Container>
      <Navigation onPress={() => navigation.navigate('Home')}>
        <Icon name='arrow-back-circle' size={30} />
        <Title>Home</Title>
      </Navigation>

      <WebView
        source={{ uri: `https://www.youtube.com/embed/${video.key}` }}
        title='YouTube video player'
        allowsFullscreenVideo
      >
      </WebView>
    </Container >
  );
}

const Container = styled.View`
  background-color: ${props => props.theme.primaryColor};
  height: 100%;
`

const Navigation = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const Title = styled.Text`
  color: ${props => props.theme.secondaryColor};
  font-weight: 600;
  font-size: 16px;
`

export default Video;
