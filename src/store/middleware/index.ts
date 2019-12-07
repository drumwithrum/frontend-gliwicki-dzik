import thunk from 'redux-thunk';
import { routerMiddleware } from 'connected-react-router';
import { applyMiddleware, compose } from 'redux';
import { History } from 'history';
import api from './api';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: any;
  }
}

const middleware = [api, thunk];
const devToolsCompose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const composeEnhancers = devToolsCompose || compose;

export default (history: History<any>) => composeEnhancers(
  applyMiddleware(
    routerMiddleware(history),
    ...middleware,
  ),
);
