import axiosConfig from '../../configs/AxiosConfig';

export const profile = () => async dispatch => {
  dispatch({type: 'PROFILE_REQUEST'});
  try {
    const response = await axiosConfig.get(`/api/v1/user/profile`);
    dispatch({type: 'PROFILE_SUCCESS', payload: {...response?.data?.data}});
  } catch (err) {
    dispatch({
      type: 'PROFILE_FAILURE',
      error: err.response ? err.response.data : err.message,
    });
  }
};

export const transaction = () => async dispatch => {
  dispatch({type: 'TRANSACTION_REQUEST'});
  try {
    const response = await axiosConfig.get(`/api/v1/user/transactions`);
    dispatch({type: 'TRANSACTION_SUCCESS', payload: {...response?.data?.data}});
  } catch (err) {
    dispatch({
      type: 'TRANSACTION_FAILURE',
      error: err.response ? err.response.data : err.message,
    });
  }
};

export const withdraw = amount => async dispatch => {
  const payload = {
    amount: amount,
  };
  dispatch({type: 'WITHDRAW_REQUEST'});
  try {
    const response = await axiosConfig.post(`/api/v1/user/withdraw`, payload);
    alert(response?.data?.message);
    dispatch({type: 'WITHDRAW_SUCCESS', payload: {...response?.data}});
  } catch (err) {
    dispatch({
      type: 'WITHDRAW_FAILURE',
      error: err.response ? err.response.data : err.message,
    });
    alert(err?.response?.data?.message);
  }
};
