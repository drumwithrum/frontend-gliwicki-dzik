import { ThreadMessage, ContactedUser } from 'types/Api/excercises';

export interface State {
  isFetching: boolean;
  excercises: any[];
}

export default interface Store {
  excercises: State;
}
