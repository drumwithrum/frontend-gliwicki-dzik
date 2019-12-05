import { createBrowserHistory } from 'history';
import { createStore } from 'redux';
import createRootReducer from 'store/reducers';
import createMiddleware from 'store/middleware';

export const history = createBrowserHistory();

export default (preloadedState?: any) => (
  createStore(
    createRootReducer(history),
    preloadedState,
    createMiddleware(history),
  )
);
