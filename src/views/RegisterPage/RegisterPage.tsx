import React, { FC } from 'react';
import RegisterForm from './RegisterForm';
import { Wrapper, Layout, FormWrapper, Header, Content, Typography, Button } from './RegisterPage.style';

interface RegisterPageProps {
}

const RegisterPage: FC<RegisterPageProps> = () => {
  return (
    <Wrapper>
      <Layout />
      <Content>
        <FormWrapper>
          <Header>Załóż konto i zostań dzikiem już dziś</Header>
          <RegisterForm />
          <Button>Zarejestruj</Button>
          <Typography>
            Masz już u nas konto? <span>Kliknij tutaj</span> żeby się zalogować!
          </Typography>
        </FormWrapper>
      </Content>
    </Wrapper>
  );
};

export default RegisterPage;
