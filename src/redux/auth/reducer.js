const initialState = {
  loading: false,
  data: null,
  error: null,
};

export const loginReducer = (state = initialState, action) => {
  switch (action?.type) {
    case 'LOGIN_REQUEST':
      return {...state, loading: true};
    case 'LOGIN_SUCCESS':
      return {...state, loading: false, data: action.payload};
    case 'LOGIN_FAILURE':
      return {...state, loading: false, error: action.error};
    case 'LOGOUT':
      return {...state, loading: false, data: null};
    default:
      return state;
  }
};
