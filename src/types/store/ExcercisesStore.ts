import { Excercise, Workout } from 'types/Api/excercises';

export interface State {
  isFetching: boolean;
  addWorkoutFailure: boolean;
  excercises: Excercise[];
  workouts: Workout[];
}

export default interface Store {
  excercises: State;
}
