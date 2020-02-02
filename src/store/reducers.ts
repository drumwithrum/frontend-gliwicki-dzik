import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';
import { reducer as startingPage } from 'views/StartingPage';
import { reducer as form } from 'redux-form';
import UserStore from './user/reducer';
import UsersStore from './users/reducer';

const appReducer = (history: History<any>) => combineReducers({
  form,
  startingPage,
  user: UserStore,
  users: UsersStore,
  router: connectRouter(history),
});

export default appReducer;
