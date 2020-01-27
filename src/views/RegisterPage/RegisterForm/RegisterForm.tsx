
import { Wrapper, FieldWrapper } from './RegisterForm.style';
import React, { PureComponent } from 'react';
import Grid from '@material-ui/core/Grid';
import { Input, Select } from 'components';
import { reduxForm, InjectedFormProps, Field, Form } from 'redux-form';

// const NavItem: FC = (props: NavItemProps) => {
//   return (
//     <Wrapper>
//       <Input name="login" label="Nazwa użytkownika" />
//       <Input name="password" type="password" label="Hasło" />
//       <Input name="email" type="email" label="E-mail" />
//       <Input name="bicep" type="number" label="Obwód bicepsa (cm)" />
//     </Wrapper>
//   );
// };

// export default NavItem;

interface RegisterFormProps extends InjectedFormProps {
  onSubmit?: () => void;
}

const genders = [{
  title: 'Mężczyzna',
  value: 'male',
}, {
  title: 'Kobieta',
  value: 'female',
}];

class RegistgerForm extends PureComponent<RegisterFormProps> {
  public static defaultProps = {
  };

  public render() {
    const { handleSubmit } = this.props;
    return(
      <Wrapper>
        <Form onSubmit={handleSubmit(this.onSubmit)} autoComplete="off">
          <FieldWrapper>
            <Field
              name="login"
              type="text"
              component={Input}
              label="Nazwa użytkownika"
            />
          </FieldWrapper>
          <FieldWrapper>
            <Field
              name="country"
              type="password"
              component={Input}
              label="Miasto"
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

  private onSubmit = (values: any) => {
    console.log(values);
  }
}

export default reduxForm({ form: 'register-form' })(RegistgerForm);
