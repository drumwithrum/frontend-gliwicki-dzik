import { CALL_API } from 'store/middleware/api';
import { api } from 'config';
import { Workout } from 'types/Api/excercises';
import types from './types';

export const fetchAllExcercises = () => ({
  [CALL_API]: {
    endpoint: api.EXCERCISES.BASE,
    public: true,
    types: [
      types.FETCH_ALL_EXCERCISES_REQUEST,
      types.FETCH_ALL_EXCERCISES_SUCCESS,
      types.FETCH_ALL_EXCERCISES_FAILURE,
    ],
  },
});

export const fetchAllWorkouts = () => ({
  [CALL_API]: {
    endpoint: api.WORKOUTS.BASE,
    types: [
      types.FETCH_ALL_WORKOUTS_REQUEST,
      types.FETCH_ALL_WORKOUTS_SUCCESS,
      types.FETCH_ALL_WORKOUTS_FAILURE,
    ],
  },
});

export const addWorkout = (data: Workout) => ({
  [CALL_API]: {
    endpoint: api.WORKOUTS.BASE,
    method: 'POST',
    data,
    types: [
      types.ADD_TRAINING_REQUEST,
      types.ADD_TRAINING_SUCCESS,
      types.ADD_TRAINING_FAILURE,
    ],
  },
});
