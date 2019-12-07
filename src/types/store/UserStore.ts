export interface State {
  username: string;
  isFetching: boolean;
}

export default interface Store {
  user: State;
}
