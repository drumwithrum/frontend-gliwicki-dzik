import { CALL_API } from 'store/middleware/api';
import { api } from 'config';
import types from './types';

export const getUsers = () => ({
  [CALL_API]: {
    endpoint: api.USERS.GET_USERS,
    method: 'GET',
    types: [
      types.USERS_REQUEST,
      types.USERS_SUCCESS,
      types.USERS_FAILURE,
    ],
  },
});
