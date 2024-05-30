import {combineReducers} from 'redux';
import {loginReducer} from './auth/reducer';
import {profileReducer, transactionsReducer, withdrawReducer} from './withdraw/reducer';

const authReducer = combineReducers({loginReducer: loginReducer});
const homeReducer = combineReducers({
    profileReducer: profileReducer,
    transactionsReducer: transactionsReducer,
    withdrawReducer: withdrawReducer
});

const rootReducer = combineReducers({
  auth: authReducer,
  homeReducer: homeReducer
});

export default rootReducer;
