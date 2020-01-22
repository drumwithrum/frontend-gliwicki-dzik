import React, { PureComponent } from 'react';
import { Wrapper } from './EditProfileForm.style';
import { Input } from 'components';
import { reduxForm, InjectedFormProps, Field, Form } from 'redux-form';

interface EditProfileFormProps extends InjectedFormProps {
  onSubmit?: () => void;
}

class EditProfileForm extends PureComponent<EditProfileFormProps> {
  public static defaultProps = {
  };

  public render() {
    const { handleSubmit } = this.props;
    return(
      <Wrapper>
        <Form onSubmit={handleSubmit(this.onSubmit)} autoComplete="off">
        <Field
          name="city"
          type="text"
          component={Input}
          label="Kraj"
        />
        <Field
          name="country"
          type="text"
          component={Input}
          label="Miasto"
        />
        <Field
          name="weight"
          type="number"
          component={Input}
          label="Waga [kg]"
          min={1}
        />
        <Field
          name="Height"
          type="number"
          component={Input}
          label="Wzrost [cm]"
          min={1}
        />
        <Field
          name="bicepSize"
          type="number"
          component={Input}
          label="Rozmiar bicepsa [cm]"
          min={1}
        />
        </Form>
      </Wrapper>
    );
  }

  private onSubmit = (values: any) => {
    console.log(values);
  }
}

export default reduxForm({ form: 'edit-profile-form' })(EditProfileForm);
