import React, { FC } from 'react';
import LoginForm from './LoginForm';
import { Wrapper, Layout, FormWrapper, Header, Content, Typography, Button, ErrorMessage } from './LoginPage.style';
import { withRouter, RouteComponentProps } from 'react-router';
import { compose } from 'redux';
import { routing } from 'config';
import { isLoginFailure } from 'store/user/selectors';
import { connect } from 'react-redux';
import { submit } from 'redux-form';

interface LoginPageProps extends RouteComponentProps {
  submit: typeof submit;
  isLoginFailure: boolean;
}

const LoginPage: FC<LoginPageProps> = ({ submit, history, isLoginFailure }) => {
  const handleClick = () => submit('login-form');
  const onRedirect = () => history.push(routing.REGISTER.url);
  return (
    <Wrapper>
      <Layout />
      <Content>
        <FormWrapper>
          <Header>Zaloguj się.</Header>
          <LoginForm />
          {isLoginFailure && (
            <ErrorMessage>
              Logowanie nie powiodło się!
            </ErrorMessage>
          )}
          <Button onClick={handleClick}>Zaloguj</Button>
          <Typography>
            Nie posiadasz jeszcze konta u nas?
            <span onClick={onRedirect}>Kliknij tutaj</span>
            żeby się zarejestrować!
          </Typography>
        </FormWrapper>
      </Content>
    </Wrapper>
  );
};

const mapStateToProps = (state: any) => ({
  isLoginFailure: isLoginFailure(state),
});

const mapDispatchToProps = {
  submit,
};

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps),
)(LoginPage) as () => JSX.Element;
