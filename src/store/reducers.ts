import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';
import { reducer as startingPage } from 'views/StartingPage';
import { reducer as form } from 'redux-form';
import UserStore from './user/reducer';
import UsersStore from './users/reducer';
import SingleUserStore from './singleUser/reducer';

const appReducer = (history: History<any>) => combineReducers({
  form,
  startingPage,
  user: UserStore,
  users: UsersStore,
  singleUser: SingleUserStore,
  router: connectRouter(history),
});

export default appReducer;
