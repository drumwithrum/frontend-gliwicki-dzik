import { Wrapper, FieldWrapper } from './LoginForm.style';
import React, { PureComponent } from 'react';
import { Input } from 'components';
import { reduxForm, InjectedFormProps, Field, Form } from 'redux-form';
import { login } from 'store/user/actions';
import { connect } from 'react-redux';

interface LoginFormProps extends InjectedFormProps {
  onSubmit?: () => void;
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
    const { login } = this.props;
    console.log(username, password)
    await login(username, password);
  }
}

const mapStateToProps = (state: any) => ({
});

const mapDispatchToProps = {
  login,
};

const connectedComponent = connect(mapStateToProps, mapDispatchToProps)(LoginForm);
export default reduxForm({ form: 'login-form' })(connectedComponent);
