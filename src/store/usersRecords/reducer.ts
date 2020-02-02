import { State } from 'types/store/UsersStore';
import { CallApiActionResponse } from 'store/middleware/api';

import types from './types';

const initialState: State = {
  data: [],
  isFetching: false,
  error: null,
};

export default (state = initialState, action: CallApiActionResponse) => {
  switch (action.type) {
    case types.USERS_RECORDS_REQUEST: return {
      ...state,
      isFetching: true,
    };
    case types.USERS_RECORDS_SUCCESS: {
      const { data } = action.response;
      return {
        ...state,
        isFetching: false,
        error: null,
        data,
      };
    }
    case types.USERS_RECORDS_FAILURE: {
      return {
        ...state,
        isFetching: false,
        error: action.response,
      };
    }
    default: return state;
  }
};
