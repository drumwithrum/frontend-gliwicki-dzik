export interface User {
  name?: string;
}

export interface ErrorInterface {
  statusCode?: number;
  message?: string;
}

export interface State {
  data?: User[];
  isFetching: boolean;
  error?: null | ErrorInterface;
}

export default interface Store {
  users: State;
}
