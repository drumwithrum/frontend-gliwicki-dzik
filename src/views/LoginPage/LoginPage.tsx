import React, { FC } from 'react';
import LoginForm from './LoginForm';
import { Wrapper, Layout, FormWrapper, Header, Content, Typography, Button } from './LoginPage.style';

interface LoginPageProps {
}

const LoginPage: FC<LoginPageProps> = () => {
  return (
    <Wrapper>
      <Layout />
      <Content>
        <FormWrapper>
          <Header>Zaloguj się.</Header>
          <LoginForm />
          <Button>Zaloguj</Button>
          <Typography>
            Nie posiadasz jeszcze konta u nas? <span>Kliknij tutaj</span> żeby się zarejestrować!
          </Typography>
        </FormWrapper>
      </Content>
    </Wrapper>
  );
};

export default LoginPage;
