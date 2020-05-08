import {Reducer} from 'redux';

import {AUTH_ACTION_TYPE} from '../actions/authActions';
import AuthState from '../models/auth';
import {Action} from '../models/action';

const initialState = {};

const authReducer: Reducer<AuthState, Action> = (
  state = initialState,
  action
): AuthState => {
  switch (action.type) {
    case AUTH_ACTION_TYPE.GET_CURRENT_AUTHENTICATED_USER: {
      return {
        ...state,
        isLoggedIn: true,
        cognitoUser: action.payload
      };
    }
    default:
      return state;
  }
};

export default authReducer;
