import { State } from 'types/store/UserStore';
import { CallApiActionResponse } from 'store/middleware/api';

import types from './types';

const initialState: State = {
  username: '',
  isFetching: false,
};

export default (state = initialState, action: CallApiActionResponse) => {
  switch (action.type) {
    case types.LOGIN_REQUEST: return {
      ...state,
      isFetching: true,
    };
    case types.LOGIN_SUCCESS: {
      const { data } = action.response;
      return {
        ...state,
        username: data,
      };
    }
    case types.LOGIN_FAILURE: {
      return {
        ...state,
        isFetching: false,
      };
    }

    default: return state;
  }
};
