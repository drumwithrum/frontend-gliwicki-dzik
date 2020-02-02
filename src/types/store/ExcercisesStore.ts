import { Excercise, WorkoutApi } from 'types/Api/excercises';

export interface State {
  isFetching: boolean;
  addWorkoutFailure: boolean;
  updatePlanFailure: boolean;
  excercises: Excercise[];
  workouts: WorkoutApi[];
}

export default interface Store {
  excercises: State;
}
