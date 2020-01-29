import React, { PureComponent } from 'react';
import { Route, Redirect } from 'react-router';
import Routing from 'config/routing';
import Auth from 'utils/auth';

class UnauthorizedRoute extends PureComponent<any> {
  public render() {
    const { component, ...props } = this.props;
    return <Route {...props} render={this.renderRoute} />;
  }

  private renderRoute = () => {
    const { component: Component, ...props } = this.props;
    return Auth.isAuthorized
      ? <Redirect to={Routing.HOME.url} />
      : <Component {...props} />;
  }
}

export default UnauthorizedRoute;
