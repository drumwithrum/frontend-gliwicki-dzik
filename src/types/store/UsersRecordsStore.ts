import {Error} from 'types/store/UsersStore';

export interface UserRecord {
  userId: number;
  username: string;
  gender: string;
  age: number;
  growth: number;
  weight: number;
  bicepsSize: number;
}

export interface State {
  data: UserRecord[];
  isFetching: boolean;
  error?: null | Error;
}

export default interface Store {
  usersRecords: State;
}
