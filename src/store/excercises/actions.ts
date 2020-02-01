import { CALL_API } from 'store/middleware/api';
import { api } from 'config';
import types from './types';

export const fetchAllExcercises = () => ({
  [CALL_API]: {
    endpoint: api.EXCERCISES.BASE,
    public: true,
    types: [
      types.FETCH_ALL_EXCERCISES_REQUEST,
      types.FETCH_ALL_EXCERCISES_SUCCESS,
      types.FETCH_ALL_EXCERCISES_FAILURE,
    ],
  },
});
