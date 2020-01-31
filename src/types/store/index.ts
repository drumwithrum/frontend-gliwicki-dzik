import UserStore from './UserStore';
import MessagesStore from './MessagesStore';

export default interface Store extends UserStore, MessagesStore {}
