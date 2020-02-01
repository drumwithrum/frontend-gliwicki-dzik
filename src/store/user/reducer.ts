import { State } from 'types/store/UserStore';
import { CallApiActionResponse } from 'store/middleware/api';
import Auth from 'utils/auth';

import types from './types';

const initialState: State = {
  username: '',
  isFetching: false,
  loginFailure: false,
  registerFailure: false,
};

export default (state = initialState, action: CallApiActionResponse) => {
  switch (action.type) {
    case types.LOGIN_REQUEST: return {
      ...state,
      isFetching: true,
      loginFailure: false,
    };
    case types.LOGIN_SUCCESS: {
      const { data } = action.response;
      const { newToken, userToUse } = data;
      Auth.saveToken(newToken.token);
      Auth.saveUserId(userToUse.userId);
      return {
        ...state,
        username: data,
      };
    }
    case types.LOGIN_FAILURE: {
      return {
        ...state,
        isFetching: false,
        loginFailure: true,
      };
    }

    case types.REGISTER_REQUEST: return {
      ...state,
      isFetching: true,
      registerFailure: false,
    };
    case types.REGISTER_SUCCESS: {
      const { data } = action.response;
      return {
        ...state,
        username: data,
      };
    }
    case types.REGISTER_FAILURE: {
      return {
        ...state,
        isFetching: false,
        registerFailure: true,
      };
    }

    default: return state;
  }
};
