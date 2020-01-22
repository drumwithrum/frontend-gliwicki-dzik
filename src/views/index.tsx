import React, { PureComponent } from 'react';
import { Provider } from 'react-redux';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { Route, Switch, Redirect } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';
import configureStore, { history } from 'store/configureStore';
import { PrivateRoute } from 'components';
import Routing from 'config/routing';
import StartingPage from './StartingPage';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';
import ExcercisesPage from './ExcercisesPage';
import WorkoutsPage from './WorkoutsPage';
import RankingPage from './RankingPage';
import EditProfilePage from './EditProfilePage';

const store = configureStore();

export const Router = (
  <Switch>
    <Route exact path={Routing.HOME.url} component={StartingPage} />
    <Route exact path={Routing.LOGIN.url} component={LoginPage} />
    <Route exact path={Routing.REGISTER.url} component={RegisterPage} />
    <Route exact path={Routing.EXCERCISES.url} component={ExcercisesPage} />
    <Route exact path={Routing.WORKOUTS.url} component={WorkoutsPage} />
    <Route exact path={Routing.RANKING.url} component={RankingPage} />
    <Route exact path={Routing.PROFILE.url} component={EditProfilePage} />
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
