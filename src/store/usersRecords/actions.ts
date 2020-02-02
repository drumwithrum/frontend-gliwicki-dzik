import { CALL_API } from 'store/middleware/api';
import { api } from 'config';
import types from './types';

export const getUsersRecords = (params: {[key: string]: number | string}) => ({
  [CALL_API]: {
    endpoint: api.USERS.GET_USERS_RECORDS,
    method: 'GET',
    params: {...params},
    types: [
      types.USERS_RECORDS_REQUEST,
      types.USERS_RECORDS_SUCCESS,
      types.USERS_RECORDS_FAILURE,
    ],
  },
});
