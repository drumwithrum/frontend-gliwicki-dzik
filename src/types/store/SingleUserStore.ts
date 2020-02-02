export interface SingleUser {
  userId: number;
  username: string;
  email: string;
  gender: string;
  dateOfCreated: any;
  lastActive: any;
  city: string;
  country: string;
  age: number;
  growth: number;
  weight: number;
  description: string;
  bicepsSize: number;
}

export interface Error {
  statusCode?: number;
  message?: string;
}

export interface State {
  data: SingleUser | null;
  isFetching: boolean;
  error?: null | Error;
}

export default interface Store {
  singleUser: State;
}
