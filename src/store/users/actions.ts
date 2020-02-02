import { CALL_API } from 'store/middleware/api';
import { api } from 'config';
import types from './types';

export const getUsers = (params: {[key: string]: number | string}) => ({
  [CALL_API]: {
    endpoint: api.USERS.GET_USERS,
    method: 'GET',
    params: {...params},
    types: [
      types.USERS_REQUEST,
      types.USERS_SUCCESS,
      types.USERS_FAILURE,
    ],
  },
});
