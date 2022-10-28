import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { Button, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styled from 'styled-components';

const Video = ({ route }) => {
  const [video, setVideo] = useState({});
  const navigation = useNavigation();

  const apiUrl = 'https://api.themoviedb.org/3';
  const apiKey = 'fd7bff04ac1e8d64d6c38c9200b46fb8';

  useEffect(() => {
    const getVideo = async () => {
      try {
        const result = await axios.get(`${apiUrl}/movie/${route.params.id}?api_key=${apiKey}`)
        // console.log('video id', route.params.id);
        setVideo(result);
        console.log('Video', result)
      } catch (error) {
        console.log(error)
      }
    }
    getVideo();
  }, []);

  return (
    <Container>
      <Button title="X" onPress={() => navigation.navigate('Home')} />
      <Title>Titre</Title>
      {/* <iframe 
        src={`http://www.youtube.com/embed/${video.key}`} 
        title='YouTube video player'
      >
      </iframe> */}
    </Container>
  );
}

const Container = styled.View`
  background-color: black;
  height: 100%;
`

const Title = styled.Text`
  font-weight: 600;
  color: white;
`

export default Video;
