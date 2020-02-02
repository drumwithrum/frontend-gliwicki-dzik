import UserStore from './UserStore';
import MessagesStore from './MessagesStore';
import ExcercisesStore from './ExcercisesStore';
import UiStore from './UiStore';

export default interface Store extends UserStore, MessagesStore, ExcercisesStore, UiStore {}
