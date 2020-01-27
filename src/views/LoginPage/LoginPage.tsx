import React, { FC } from 'react';
import LoginForm from './LoginForm';
import { Wrapper, Layout, FormWrapper, Header, Content, Typography, Button } from './LoginPage.style';
import { connect } from 'react-redux';
import { submit } from 'redux-form';

interface LoginPageProps {
  submit: typeof submit;
}

const LoginPage: FC<LoginPageProps> = ({ submit }) => {
  const handleClick = () => submit('login-form');
  return (
    <Wrapper>
      <Layout />
      <Content>
        <FormWrapper>
          <Header>Zaloguj się.</Header>
          <LoginForm />
          <Button onClick={handleClick}>Zaloguj</Button>
          <Typography>
            Nie posiadasz jeszcze konta u nas? <span>Kliknij tutaj</span> żeby się zarejestrować!
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

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
