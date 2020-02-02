import { State } from 'types/store/ExcercisesStore';
import { CallApiActionResponse } from 'store/middleware/api';

import types from './types';

const initialState: State = {
  isFetching: false,
  excercises: [],
  addWorkoutFailure: false,
  updatePlanFailure: false,
  workouts: [],
};

export default (state = initialState, action: CallApiActionResponse) => {
  switch (action.type) {
    case types.FETCH_ALL_EXCERCISES_REQUEST: return {
      ...state,
      isFetching: true,
    };
    case types.FETCH_ALL_EXCERCISES_SUCCESS: {
      const { data: excercises } = action.response;
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

    case types.FETCH_ALL_WORKOUTS_REQUEST: return {
      ...state,
      isFetching: true,
    };
    case types.FETCH_ALL_WORKOUTS_SUCCESS: {
      const { data: workouts } = action.response;
      return {
        ...state,
        workouts,
      };
    }
    case types.FETCH_ALL_WORKOUTS_FAILURE: {
      return {
        ...state,
        isFetching: false,
      };
    }

    case types.ADD_WORKOUT_REQUEST: return {
      ...state,
      addWorkoutFailure: false,
      isFetching: true,
    };
    case types.ADD_WORKOUT_SUCCESS: {
      return {
        ...state,
      };
    }
    case types.ADD_WORKOUT_FAILURE: {
      return {
        ...state,
        isFetching: false,
        addWorkoutFailure: true,
      };
    }

    case types.UPDATE_WORKOUT_PLAN_REQUEST: return {
      ...state,
      addWorkoutFailure: false,
      isFetching: true,
    };
    case types.UPDATE_WORKOUT_PLAN_SUCCESS: {
      return {
        ...state,
      };
    }
    case types.UPDATE_WORKOUT_PLAN_FAILURE: {
      return {
        ...state,
        isFetching: false,
        updatePlanFailure: true,
      };
    }

    default: return state;
  }
};
