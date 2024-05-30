const initialState = {
    loading: false,
    data: null,
    error: null
}

export const profileReducer = (state = initialState, action) => {
    switch (action?.type) {
      case 'PROFILE_REQUEST':
        return {...state, loading: true};
      case 'PROFILE_SUCCESS':
        return {...state, 
          loading: false,
          data: action.payload
      };
      case 'PROFILE_FAILURE':
        return {...state, loading: false, error: action.error};
      default:
        return state;
    }
  };


export const transactionsReducer = (state = initialState, action) => {
  switch (action?.type) {
    case 'TRANSACTION_REQUEST':
      return {...state, loading: true};
    case 'TRANSACTION_SUCCESS':
      return {...state, 
        loading: false,
        data: action.payload
    };
    case 'TRANSACTION_FAILURE':
      return {...state, loading: false, error: action.error};
    default:
      return state;
  }
};

export const withdrawReducer = (state = initialState, action) => {
    switch (action?.type) {
      case 'WITHDRAW_REQUEST':
        return {...state, loading: true};
      case 'WITHDRAW_SUCCESS':
        return {...state, 
          loading: false,
          data: action.payload
      };
      case 'WITHDRAW_FAILURE':
        return {...state, loading: false, error: action.error};
      default:
        return state;
    }
  };