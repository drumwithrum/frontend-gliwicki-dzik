import { ThreadMessage, ContactedUser } from 'types/Api/messages';

export interface State {
  isFetching: boolean;
  threads: [];
  currentThread: ThreadMessage[];
  contactedUsers: ContactedUser[];
}

export default interface Store {
  messages: State;
}
