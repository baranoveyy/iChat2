import {combineReducers} from 'redux';

import AuthState from '../models/auth';
import CommonState from '../models/common';

import authReducer from './authReducer';
import commonReducer from './commonReducer';


// App state types
export interface RootState {
  auth: AuthState;
  common: CommonState;
}

// Combine all reducers
const appReducer = combineReducers<RootState>({
  auth: authReducer,
  common: commonReducer
});

const rootReducer = (state, action) =>
  appReducer(
    state,
    action
  );

export default rootReducer;
