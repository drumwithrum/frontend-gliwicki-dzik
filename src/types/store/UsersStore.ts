export interface User {
  userId: number;
  username: string;
  gender: string;
  age: number;
  growth: number;
  weight: number;
  bicepsSize: number;
}

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
  data?: User[];
  isFetching: boolean;
  error?: null | Error;
}

export default interface Store {
  users: State;
}
