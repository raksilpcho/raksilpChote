import {configureStore} from '@reduxjs/toolkit';
import {createLogger} from 'redux-logger';
import rootReducer from './rootReducer';

const devMiddleware = [];

const createEnhancedStore = () => {
    const logger = createLogger(); 
  
    const middleware = process.env.NODE_ENV === 'development'
      ? [logger] 
      : [logger]; 
  
    return configureStore({
      reducer: rootReducer,
      middleware: getDefaultMiddleware => getDefaultMiddleware(middleware),
    });
  };
  
  const store = createEnhancedStore();

export default store;
