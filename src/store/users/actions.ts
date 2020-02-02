import { CALL_API } from 'store/middleware/api';
import { api } from 'config';
import types from './types';

export const getUsers = () => ({
  [CALL_API]: {
    endpoint: api.USERS.GET_USERS,
    method: 'GET',
    params: {
      PageSize: 10,
    },
    types: [
      types.USERS_REQUEST,
      types.USERS_SUCCESS,
      types.USERS_FAILURE,
    ],
  },
});
