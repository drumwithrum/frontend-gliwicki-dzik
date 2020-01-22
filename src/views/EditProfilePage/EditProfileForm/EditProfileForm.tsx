import React, { PureComponent } from 'react';
import { Wrapper, Content, FieldWrapper } from './EditProfileForm.style';
import Grid from '@material-ui/core/Grid';
import { Input, Select } from 'components';
import { reduxForm, InjectedFormProps, Field, Form } from 'redux-form';

interface EditProfileFormProps extends InjectedFormProps {
  onSubmit?: () => void;
}

const genders = [{
  title: 'Mężczyzna',
  value: 'male',
}, {
  title: 'Kobieta',
  value: 'female',
}];

class EditProfileForm extends PureComponent<EditProfileFormProps> {
  public static defaultProps = {
  };

  public render() {
    const { handleSubmit } = this.props;
    return(
      <Wrapper>
        <Form onSubmit={handleSubmit(this.onSubmit)} autoComplete="off">
          <Content container>
            <FieldWrapper item xs={6}>
              <Field
                name="city"
                type="text"
                component={Input}
                label="Kraj"
              />
            </FieldWrapper>
            <FieldWrapper item xs={6}>
              <Field
                name="country"
                type="text"
                component={Input}
                label="Miasto"
              />
            </FieldWrapper>
            <FieldWrapper item xs={6}>
              <Field
                name="gender"
                component={Select}
                options={genders}
                label="Płeć"
              />
            </FieldWrapper>
            <FieldWrapper item xs={6}>
              <Field
                name="weight"
                type="number"
                component={Input}
                label="Waga [kg]"
                min={1}
              />
            </FieldWrapper>
            <FieldWrapper item xs={6}>
              <Field
                name="Height"
                type="number"
                component={Input}
                label="Wzrost [cm]"
                min={1}
              />
            </FieldWrapper>
            <FieldWrapper item xs={6}>
              <Field
                name="bicepSize"
                type="number"
                component={Input}
                label="Rozmiar bicepsa [cm]"
                min={1}
              />
            </FieldWrapper>
          </Content>
        </Form>
      </Wrapper>
    );
  }

  private onSubmit = (values: any) => {
    console.log(values);
  }
}

export default reduxForm({ form: 'edit-profile-form' })(EditProfileForm);
