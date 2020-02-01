import { Excercise } from 'types/Api/excercises';

export interface State {
  isFetching: boolean;
  excercises: Excercise[];
}

export default interface Store {
  excercises: State;
}
