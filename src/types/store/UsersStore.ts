import {SingleUser} from './SingleUserStore';

export interface RankingUser {
  id: number;
  name: string;
  age: number;
  weight: number;
  bicepsSize: number;
}

export interface Error {
  statusCode?: number;
  message?: string;
}

export interface State {
  data: SingleUser[];
  isFetching: boolean;
  error?: null | Error;
}

export default interface Store {
  users: State;
}
