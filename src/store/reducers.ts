import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';
import { reducer as startingPage } from 'views/StartingPage';
import { reducer as form } from 'redux-form';

const appReducer = (history: History<any>) => combineReducers({
  form,
  startingPage,
  router: connectRouter(history),
});

export default appReducer;
