import Store from 'types/store/ExcercisesStore';

export const isFetching = (state: Store) => state.excercises.isFetching;

export const getExcercises =  (state: Store) => state.excercises.excercises;

export const getExcercisesList =  (state: Store) => state.excercises.excercises
  .map((item) => ({ title: item.name, url: item.url, id: item.exerciseId }));

export const getWorkouts = (state: Store) => state.excercises.workouts;

export const isAddWorkoutFailure = (state: Store) => state.excercises.addWorkoutFailure;
