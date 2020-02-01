import React, { PureComponent } from 'react';
import { Wrapper, Content, FieldWrapper } from './EditProfileForm.style';
import { connect } from 'react-redux';
import { fetchCurrentUser, editUser } from 'store/user/actions';
import { getCurrentUser } from 'store/user/selectors';
import { User, UserEditBody } from 'types/Api/user';
import State from 'types/store';
import { compose } from 'redux';
import { Input } from 'components';
import { reduxForm, InjectedFormProps, Field, Form, initialize } from 'redux-form';

interface PassedProps {
  onSubmit?: () => void;
}

interface EditProfileFormProps extends PassedProps, InjectedFormProps {
  fetchCurrentUser: typeof fetchCurrentUser;
  editUser: typeof editUser;
  onInitialize: (form: string, data: object) => void;
  currentUser: User | null;
}

class EditProfileForm extends PureComponent<EditProfileFormProps> {
  public static defaultProps = {
  };

  public async componentDidMount() {
    const { fetchCurrentUser } = this.props;
    await fetchCurrentUser();
    this.initializeForm();
  }

  public render() {
    const { handleSubmit } = this.props;
    return(
      <Wrapper>
        <Form onSubmit={handleSubmit(this.onSubmit)} autoComplete="off">
          <Content container>
            <FieldWrapper item xs={6}>
              <Field
                placeholder="Wpisz swój kraj..."
                name="country"
                type="text"
                component={Input}
                label="Kraj"
              />
            </FieldWrapper>
            <FieldWrapper item xs={6}>
              <Field
                placeholder="Wpisz swoje miasto..."
                name="city"
                type="text"
                component={Input}
                label="Miasto"
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
                name="growth"
                type="number"
                component={Input}
                label="Wzrost [cm]"
                min={1}
              />
            </FieldWrapper>
            <FieldWrapper item xs={6}>
              <Field
                name="bicepssize"
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
  private initializeForm = () => {
    const { currentUser, onInitialize } = this.props;
    const data = currentUser!;
    const formData: UserEditBody = {
      bicepssize: data.bicepsSize || 0,
      city: data.city || '',
      country: data.country || '',
      weight: data.weight || 0,
      growth: data.growth || 0,
    }
    onInitialize('edit-profile-form', formData);
  }

  private onSubmit = (values: any) => {
    const { editUser } = this.props;
    editUser(values);
  }
}

const mapStateToProps = (state: State) => ({
  currentUser: getCurrentUser(state),
});

const mapDispatchToProps = {
  onInitialize: initialize,
  fetchCurrentUser,
  editUser,
};

export default compose(
  reduxForm({ form: 'edit-profile-form' }),
  connect(mapStateToProps, mapDispatchToProps),
)(EditProfileForm) as (props: PassedProps) => JSX.Element;
