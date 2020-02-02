import { State } from 'types/store/ExcercisesStore';
import { CallApiActionResponse } from 'store/middleware/api';

import types from './types';

const initialState: State = {
  isFetching: false,
  excercises: [],
  workouts: [],
};

export default (state = initialState, action: CallApiActionResponse) => {
  switch (action.type) {
    case types.FETCH_ALL_EXCERCISES_REQUEST: return {
      ...state,
      isFetching: true,
    };
    case types.FETCH_ALL_EXCERCISES_SUCCESS: {
      const { data: excercises, } = action.response;
      return {
        ...state,
        excercises,
      };
    }
    case types.FETCH_ALL_EXCERCISES_FAILURE: {
      return {
        ...state,
        isFetching: false,
      };
    }

    default: return state;
  }
};
