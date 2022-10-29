import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { Button, TouchableOpacity } from 'react-native';
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
      <BackButton>
        <Button title="X" onPress={() => navigation.navigate('Home')} />
      </BackButton>
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
  background-color: ${props => props.theme.secondaryColor};
  height: 100%;
`

const BackButton = styled.TouchableOpacity`
  background-color: ${props => props.theme.secondaryColor};
  width: 12%;
`

export default Video;
