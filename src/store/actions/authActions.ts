import {Auth} from 'aws-amplify';

import {ActionCreator} from '../models/action';

export enum AUTH_ACTION_TYPE {
  GET_CURRENT_AUTHENTICATED_USER = '@@auth/GET_CURRENT_AUTHENTICATED_USER',
}

export const getCurrentAuthenticatedUser: ActionCreator = () => ({
  type: AUTH_ACTION_TYPE.GET_CURRENT_AUTHENTICATED_USER,
  payload: Auth.currentAuthenticatedUser()
});
