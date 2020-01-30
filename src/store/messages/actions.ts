import { CALL_API } from 'store/middleware/api';
import { api } from 'config';
import Auth from 'utils/auth';
import { Message } from 'types/Api/messages';
import types from './types';

export const fetchThread = (recipientId: string | number) => ({
  [CALL_API]: {
    endpoint: api.MESSAGES.GET_THREAD(recipientId),
    types: [
      types.FETCH_THREAD_REQUEST,
      types.FETCH_THREAD_SUCCESS,
      types.FETCH_THREAD_FAILURE,
    ],
  },
});

export const addMessage = (message: Message) => ({
  [CALL_API]: {
    endpoint: api.MESSAGES.ADD_MESSAGE,
    method: 'POST',
    data: message,
    types: [
      types.SEND_MESSAGE_REQUEST,
      types.SEND_MESSAGE_SUCCESS,
      types.SEND_MESSAGE_FAILURE,
    ],
  },
});

// export const fetchAllThreads = () => ({
//   [CALL_API]: {
//     endpoint: api.MESSAGES.GET_THREAD(Auth.userId!),
//     types: [
//       types.FETCH_ALL_THREADS_REQUEST,
//       types.FETCH_ALL_THREADS_SUCCESS,
//       types.FETCH_ALL_THREADS_FAILURE,
//     ],
//   },
// });
