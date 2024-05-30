import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const apiUrl = 'http://localhost:3000';

const instance = axios.create({
  baseURL: apiUrl,
  timeout: 3000,
});

instance.interceptors.request.use(async config => {
  const token = await AsyncStorage.getItem('@token');
  config.baseURL = apiUrl;
  if (token) {
    config.headers = {
      Authorization: 'Bearer ' + token,
      'Content-Type': 'application/json',
      ...config.headers,
    };
  } else {
    config.headers = {'Content-Type': 'application/json'};
  }
  return config;
});

instance.interceptors.response.use(response => {
  return response;
});

export default instance;
