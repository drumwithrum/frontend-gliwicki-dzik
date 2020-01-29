import { State } from 'types/store/MessagesStore';
import { CallApiActionResponse } from 'store/middleware/api';
import Auth from 'utils/auth';

import types from './types';

const initialState: State = {
  threads: [],
  isFetching: false,
};

export default (state = initialState, action: CallApiActionResponse) => {
  switch (action.type) {
    case types.FETCH_ALL_THREADS_REQUEST: return {
      ...state,
      isFetching: true,
    };
    case types.FETCH_ALL_THREADS_SUCCESS: {
      const { data } = action.response;
      console.log(data);
      return {
        ...state,
      };
    }
    case types.FETCH_ALL_THREADS_FAILURE: {
      return {
        ...state,
        isFetching: false,
      };
    }

    default: return state;
  }
};
