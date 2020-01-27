
import { Wrapper, FieldWrapper } from './RegisterForm.style';
import React, { PureComponent } from 'react';
import { Input, Select, DatePicker } from 'components';
import { reduxForm, InjectedFormProps, Field, Form } from 'redux-form';
import { registerUser } from 'store/user/actions';
import { connect } from 'react-redux';

interface RegisterFormProps extends InjectedFormProps {
  onSubmit?: () => void;
  registerUser: typeof registerUser;
}

const genders = [{
  title: 'Mężczyzna',
  value: 'male',
}, {
  title: 'Kobieta',
  value: 'female',
}];

class RegisterForm extends PureComponent<RegisterFormProps> {
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
          <FieldWrapper>
            <Field
              name="email"
              type="email"
              component={Input}
              label="E-mail"
            />
          </FieldWrapper>
          <FieldWrapper>
            <Field
              name="gender"
              component={Select}
              options={genders}
              label="Płeć"
            />
          </FieldWrapper>
          <FieldWrapper>
            <Field
              name="dateOfBirth"
              component={DatePicker}
              label="Data urodzenia"
            />
          </FieldWrapper>
          <FieldWrapper>
            <Field
              name="bicepSize"
              type="number"
              component={Input}
              label="Rozmiar bicepsa [cm]"
              min={1}
            />
          </FieldWrapper>
        </Form>
      </Wrapper>
    );
  }

  private onSubmit = async (values: any) => {
    const { registerUser } = this.props;
    await registerUser(values);
    console.log(values);
  }
}

const mapStateToProps = (state: any) => ({
});

const mapDispatchToProps = {
  registerUser,
};

const connectedComponent = connect(mapStateToProps, mapDispatchToProps)(RegisterForm);
export default reduxForm({ form: 'register-form' })(connectedComponent);
