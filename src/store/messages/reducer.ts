import { State } from 'types/store/MessagesStore';
import { CallApiActionResponse } from 'store/middleware/api';
import Auth from 'utils/auth';

import types from './types';

const initialState: State = {
  threads: [],
  isFetching: false,
  currentThread: [],
  contactedUsers: [],
};

export default (state = initialState, action: CallApiActionResponse) => {
  switch (action.type) {
    case types.SEND_MESSAGE_REQUEST: return {
      ...state,
      isFetching: true,
    };
    case types.SEND_MESSAGE_SUCCESS: {
      return {
        ...state,
      };
    }
    case types.SEND_MESSAGE_FAILURE: {
      return {
        ...state,
        isFetching: false,
      };
    }

    case types.FETCH_THREAD_REQUEST: return {
      ...state,
      isFetching: true,
    };
    case types.FETCH_THREAD_SUCCESS: {
      const { data } = action.response;
      return {
        ...state,
        currentThread: data,
      };
    }
    case types.FETCH_THREAD_FAILURE: {
      return {
        ...state,
        isFetching: false,
      };
    }

    case types.FETCH_CONTACTED_USERS_REQUEST: return {
      ...state,
      isFetching: true,
    };
    case types.FETCH_CONTACTED_USERS_SUCCESS: {
      const { data } = action.response;
      return {
        ...state,
        contactedUsers: data,
      };
    }
    case types.FETCH_CONTACTED_USERS_FAILURE: {
      return {
        ...state,
        isFetching: false,
      };
    }

    default: return state;
  }
};
