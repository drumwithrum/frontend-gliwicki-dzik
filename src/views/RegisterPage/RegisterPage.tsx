import React, { FC } from 'react';
import { connect } from 'react-redux';
import RegisterForm from './RegisterForm';
import { Wrapper, Layout, FormWrapper, Header, Content, Typography, Button } from './RegisterPage.style';
import { withRouter, RouteComponentProps } from 'react-router';
import { compose } from 'redux';
import { routing } from 'config';
import { submit } from 'redux-form';

interface RegisterPageProps extends RouteComponentProps {
  submit: typeof submit;
}

const RegisterPage: FC<RegisterPageProps> = ({ submit, history }) => {
  const handleClick = () => submit('register-form');
  const onRedirect = () => history.push(routing.LOGIN.url);
  return (
    <Wrapper>
      <Layout />
      <Content>
        <FormWrapper>
          <Header>Załóż konto i zostań dzikiem już dziś</Header>
          <RegisterForm />
          <Button onClick={handleClick}>Zarejestruj</Button>
          <Typography>
            Masz już u nas konto?
            <span onClick={onRedirect}>Kliknij tutaj</span>
            żeby się zalogować!
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
)(RegisterPage) as () => JSX.Element;
