import React, { FC } from 'react';
import LoginForm from './LoginForm';
import { Button } from 'components';
import { Wrapper, Layout, FormWrapper, Header, Content } from './LoginPage.style';

interface LoginPageProps {
}

const LoginPage: FC<LoginPageProps> = () => {
  return (
    <Wrapper>
      <Layout />
      <Content>
        <Header>Zaloguj się.</Header>
        <FormWrapper>
          <LoginForm />
          <Button>Zaloguj</Button>
        </FormWrapper>
      </Content>
    </Wrapper>
  );
};

export default LoginPage;
