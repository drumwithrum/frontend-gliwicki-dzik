import { Wrapper, FieldWrapper } from './LoginForm.style';
import React, { PureComponent } from 'react';
import { Input } from 'components';
import { compose } from 'redux';
import { reduxForm, InjectedFormProps, Field, Form } from 'redux-form';
import { withRouter, RouteComponentProps } from 'react-router';
import { routing } from 'config';
import { login } from 'store/user/actions';
import { connect } from 'react-redux';

interface PassedProps {
  onSubmit?: () => void;
}

interface LoginFormProps extends PassedProps, InjectedFormProps, RouteComponentProps {
  login: typeof login;
}

class LoginForm extends PureComponent<LoginFormProps> {
  public static defaultProps = {
  };

  public render() {
    const { handleSubmit } = this.props;
    return(
      <Wrapper>
        <Form onSubmit={handleSubmit(this.onSubmit)} autoComplete="off">
          <FieldWrapper>
            <Field
              name="username"
              type="text"
              component={Input}
              label="Nazwa użytkownika"
            />
          </FieldWrapper>
          <FieldWrapper>
            <Field
              name="password"
              type="password"
              component={Input}
              label="Hasło"
            />
          </FieldWrapper>
        </Form>
      </Wrapper>
    );
  }

  private onSubmit = async ({ username, password }: any) => {
    const { login, history } = this.props;
    await login(username, password);
    history.push(routing.HOME.url);
  }
}

const mapStateToProps = (state: any) => ({
});

const mapDispatchToProps = {
  login,
};

export default compose(
  withRouter,
  reduxForm({ form: 'login-form' }),
  connect(mapStateToProps, mapDispatchToProps),
)(LoginForm) as (props: PassedProps) => JSX.Element;
