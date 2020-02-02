import { State, SingleUser } from 'types/store/SingleUserStore';
import { CallApiActionResponse } from 'store/middleware/api';

import types from './types';

const initialState: State = {
  data: null,
  isFetching: false,
  error: null,
};

export default (state = initialState, action: CallApiActionResponse) => {
  switch (action.type) {
    case types.SINGLE_USER_REQUEST: return {
      ...state,
      isFetching: true,
    };
    case types.SINGLE_USER_SUCCESS: {
      const { data } = action.response;
      return {
        ...state,
        isFetching: false,
        error: null,
        data,
      };
    }
    case types.SINGLE_USER_FAILURE: {
      return {
        ...state,
        isFetching: false,
        error: action.response,
      };
    }
    default: return state;
  }
};
