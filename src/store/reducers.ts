import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';
import { reducer as startingPage } from 'views/StartingPage';
import { reducer as form } from 'redux-form';
import UserStore from './user/reducer';
import MessagesStore from './messages/reducer';

const appReducer = (history: History<any>) => combineReducers({
  form,
  startingPage,
  user: UserStore,
  messages: MessagesStore,
  router: connectRouter(history),
});

export default appReducer;
