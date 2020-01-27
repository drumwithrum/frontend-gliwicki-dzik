import React, { FC } from 'react';
import { connect } from 'react-redux';
import RegisterForm from './RegisterForm';
import { Wrapper, Layout, FormWrapper, Header, Content, Typography, Button } from './RegisterPage.style';
import { submit } from 'redux-form';

interface RegisterPageProps {
  submit: typeof submit;
}

const RegisterPage: FC<RegisterPageProps> = ({ submit }) => {
  const handleClick = () => submit('register-form');
  return (
    <Wrapper>
      <Layout />
      <Content>
        <FormWrapper>
          <Header>Załóż konto i zostań dzikiem już dziś</Header>
          <RegisterForm />
          <Button onClick={handleClick}>Zarejestruj</Button>
          <Typography>
            Masz już u nas konto? <span>Kliknij tutaj</span> żeby się zalogować!
          </Typography>
        </FormWrapper>
      </Content>
    </Wrapper>
  );
}

const mapStateToProps = (state: any) => ({
});

const mapDispatchToProps = {
  submit,
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage);
