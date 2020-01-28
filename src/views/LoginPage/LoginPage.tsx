import React, { FC } from 'react';
import LoginForm from './LoginForm';
import { Wrapper, Layout, FormWrapper, Header, Content, Typography, Button } from './LoginPage.style';
import { withRouter, RouteComponentProps } from 'react-router';
import { compose } from 'redux';
import { routing } from 'config';
import { connect } from 'react-redux';
import { submit } from 'redux-form';

interface LoginPageProps extends RouteComponentProps {
  submit: typeof submit;
}

const LoginPage: FC<LoginPageProps> = ({ submit, history }) => {
  const handleClick = () => submit('login-form');
  const onRedirect = () => history.push(routing.REGISTER.url);
  return (
    <Wrapper>
      <Layout />
      <Content>
        <FormWrapper>
          <Header>Zaloguj się.</Header>
          <LoginForm />
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
});

const mapDispatchToProps = {
  submit,
};

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps),
)(LoginPage) as () => JSX.Element;
