import UserStore from './UserStore';
import MessagesStore from './MessagesStore';
import ExcercisesStore from './ExcercisesStore';

export default interface Store extends UserStore, MessagesStore, ExcercisesStore {}
