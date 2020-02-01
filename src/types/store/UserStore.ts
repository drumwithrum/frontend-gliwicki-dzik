import { User } from 'types/Api/user';

export interface State {
  username: string;
  isFetching: boolean;
  loginFailure: boolean;
  registerFailure: boolean;
  currentUser: User | null;
}

export default interface Store {
  user: State;
}
