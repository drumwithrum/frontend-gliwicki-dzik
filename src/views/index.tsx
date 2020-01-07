import React, { PureComponent } from 'react';
import { Provider } from 'react-redux';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { Route, Switch, Redirect } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';
import configureStore, { history } from 'store/configureStore';
import StartingPage from './StartingPage';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';
import ExcercisesPage from './ExcercisesPage';
import WorkoutsPage from './WorkoutsPage';

const store = configureStore();

export const Router = (
  <Switch>
    <Route exact path="/home" component={StartingPage} />
    <Route exact path="/login" component={LoginPage} />
    <Route exact path="/register" component={RegisterPage} />
    <Route exact path="/excercises" component={ExcercisesPage} />
    <Route exact path="/workouts" component={WorkoutsPage} />
    <Route path="*" render={() => <Redirect to="/home" />} />
  </Switch>
);

class App extends PureComponent {
  public render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <MuiThemeProvider theme={createMuiTheme({})}>
            {Router}
          </MuiThemeProvider>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
