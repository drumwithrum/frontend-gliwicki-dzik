import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router';
import State from 'types/store';
import Routing from 'config/routing';
import Auth from 'config/auth';

class PrivateRoute extends PureComponent<any> {
  public state = {
    shouldRedirectToLogin: false,
  };

  public async componentDidMount() {
    this.setState({ shouldRedirectToLogin: !Auth.isAuthorized });
  }

  public render() {
    const { component, ...props } = this.props;
    return <Route {...props} render={this.renderRoute} />;
  }

  private renderRoute = (props: any) => {
    const { component: Component } = this.props;
    const { shouldRedirectToLogin } = this.state;
    return shouldRedirectToLogin
      ? <Redirect to={Routing.LOGIN.url} />
      : <Component {...props} />;
  }
}

const mapStateToProps = (state: State) => ({
});

export default connect(mapStateToProps)(PrivateRoute);
