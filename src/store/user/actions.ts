import { CALL_API } from 'store/middleware/api';
import { api } from 'config';
import types from './types';

export const login = (username: string, password: string) => ({
  [CALL_API]: {
    endpoint: api.AUTH.LOGIN,
    data: {
      username,
      password,
    },
    types: [
      types.LOGIN_REQUEST,
      types.LOGIN_SUCCESS,
      types.LOGIN_FAILURE,
    ],
  },
});

export const registerUser = (username: string, password: string) => ({
  [CALL_API]: {
    endpoint: api.AUTH.REGISTER,
    method: 'POST',
    data: {
      username,
      password,
    },
    types: [
      types.REGISTER_REQUEST,
      types.REGISTER_SUCCESS,
      types.REGISTER_FAILURE,
    ],
  },
});
