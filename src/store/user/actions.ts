import { CALL_API } from 'store/middleware/api';
import { api } from 'config';
import { UserEditBody } from 'types/Api/user';
import types from './types';

export const login = (username: string, password: string) => ({
  [CALL_API]: {
    endpoint: api.AUTH.LOGIN,
    method: 'POST',
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

export const registerUser = (data: any) => ({
  [CALL_API]: {
    data,
    endpoint: api.AUTH.REGISTER,
    method: 'POST',
    types: [
      types.REGISTER_REQUEST,
      types.REGISTER_SUCCESS,
      types.REGISTER_FAILURE,
    ],
  },
});

export const fetchCurrentUser = () => ({
  [CALL_API]: {
    endpoint: api.USERS.CURRENT_USER,
    types: [
      types.FETCH_CURRENT_USER_REQUEST,
      types.FETCH_CURRENT_USER_SUCCESS,
      types.FETCH_CURRENT_USER_FAILURE,
    ],
  },
});

export const editUser = (data: UserEditBody) => ({
  [CALL_API]: {
    data,
    endpoint: api.USERS.BASE,
    method: 'PUT',
    types: [
      types.EDIT_USER_REQUEST,
      types.EDIT_USER_SUCCESS,
      types.EDIT_USER_FAILURE,
    ],
  },
});
