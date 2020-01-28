export interface State {
  isFetching: boolean;
  threads: [];
}

export default interface Store {
  messages: State;
}
