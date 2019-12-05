import React, { PureComponent } from 'react';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';
import configureStore, { history } from 'store/configureStore';
import StartingPage from './StartingPage';

const store = configureStore();

class App extends PureComponent {
  public render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Switch>
            <Route path="/" component={StartingPage} />
          </Switch>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
