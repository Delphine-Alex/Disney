import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const verifyIfUserIsConnected = async navigation => {
  const token = await AsyncStorage.getItem('token');

  axios({
    method: 'GET',
    url: 'https://easy-login-api.herokuapp.com/protected',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.log(error);
      AsyncStorage.removeItem('token');
      navigation.navigate('Login');
    });

  if (token !== null) {
    navigation.navigate('Home');
  } else {
    navigation.navigate('Login');
  }
};

export default verifyIfUserIsConnected;