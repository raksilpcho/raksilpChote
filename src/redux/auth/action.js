import axiosConfig from '../../configs/AxiosConfig';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const login = phone => async dispatch => {
  const payload = {
    phone: phone,
  };
  dispatch({type: 'LOGIN_REQUEST'});
  try {
    const response = await axiosConfig.post(`/api/v1/signin`, payload);
    const token = response.data?.data?.token;
    const phone = response.data?.data?.phone;

    await AsyncStorage.setItem('@token', token);
    await AsyncStorage.setItem('@phone', phone);
    dispatch({type: 'LOGIN_SUCCESS', payload: {...response?.data?.data}});
  } catch (err) {
    dispatch({
      type: 'LOGIN_FAILURE',
      error: err.response ? err.response.data : err.message,
    });
  }
};
