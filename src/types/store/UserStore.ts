export interface State {
  username: string;
  isFetching: boolean;
  loginFailure: boolean;
  registerFailure: boolean;
}

export default interface Store {
  user: State;
}
