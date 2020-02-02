import { CALL_API } from 'store/middleware/api';
import { api } from 'config';
import types from './types';

export const getSingleUser = (userId: number) => ({
  [CALL_API]: {
    endpoint: api.USERS.GET_SINGLE_USER(userId),
    method: 'GET',
    types: [
      types.SINGLE_USER_REQUEST,
      types.SINGLE_USER_SUCCESS,
      types.SINGLE_USER_FAILURE,
    ],
  },
});
