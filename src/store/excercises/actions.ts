import { CALL_API } from 'store/middleware/api';
import { api } from 'config';
import { Workout, WorkoutPlan } from 'types/Api/excercises';
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
    endpoint: `${api.WORKOUTS.BASE}?PageNumber=1&PageSize=2000`,
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
      types.ADD_WORKOUT_REQUEST,
      types.ADD_WORKOUT_SUCCESS,
      types.ADD_WORKOUT_FAILURE,
    ],
  },
});

export const updateWorkoutPlan = (data: WorkoutPlan) => ({
  [CALL_API]: {
    endpoint: api.PLAN.BASE,
    method: 'POST',
    data,
    types: [
      types.UPDATE_WORKOUT_PLAN_REQUEST,
      types.UPDATE_WORKOUT_PLAN_SUCCESS,
      types.UPDATE_WORKOUT_PLAN_FAILURE,
    ],
  },
});
