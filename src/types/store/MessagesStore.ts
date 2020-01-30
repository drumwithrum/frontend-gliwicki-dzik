import { ThreadMessage } from 'types/Api/messages';

export interface State {
  isFetching: boolean;
  threads: [];
  currentThread: ThreadMessage[];
}

export default interface Store {
  messages: State;
}
