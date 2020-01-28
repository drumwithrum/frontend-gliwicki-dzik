import { CALL_API } from 'store/middleware/api';
import { api } from 'config';
import Auth from 'utils/auth';
import types from './types';

export const fetchThread = (recipientId: string) => ({
  [CALL_API]: {
    endpoint: api.MESSAGES.GET_THREAD(recipientId),
    types: [
      types.FETCH_THREAD_REQUEST,
      types.FETCH_THREAD_SUCCESS,
      types.FETCH_THREAD_FAILURE,
    ],
  },
});

export const fetchAllThreads = () => ({
  [CALL_API]: {
    endpoint: api.MESSAGES.GET_THREAD(Auth.userId!),
    types: [
      types.FETCH_ALL_THREADS_REQUEST,
      types.FETCH_ALL_THREADS_SUCCESS,
      types.FETCH_ALL_THREADS_FAILURE,
    ],
  },
});
