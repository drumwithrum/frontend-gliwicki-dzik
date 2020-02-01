import React, { PureComponent } from 'react';
import { Wrapper, Layout, Content, BottomWrapper, Title } from './EditProfilePage.style';
import { connect } from 'react-redux';
import { fetchCurrentUser } from 'store/user/actions';
import State from 'types/store';
import EditProfileForm from './EditProfileForm';
import { Button } from 'components';
import { submit } from 'redux-form';

interface EditProfilePageProps {
  submit: typeof submit;
  fetchCurrentUser: typeof fetchCurrentUser;
}

class EditProfilePage extends PureComponent<EditProfilePageProps> {
  public static defaultProps = {
  };

  public componentDidMount() {
    const { fetchCurrentUser } = this.props;
    fetchCurrentUser();
  }

  public render() {
    const { submit } = this.props;
    return(
      <Wrapper>
        <Layout />
        <Content>
          <Title>
            Edytuj swój profil
          </Title>
          <EditProfileForm />
          <BottomWrapper>
            <Button onClick={() => submit('edit-profile-form')}>Zapisz</Button>
          </BottomWrapper>
        </Content>
      </Wrapper>
    );
  }
}

const mapStateToProps = (state: State) => ({
});

const mapDispatchToProps = {
  fetchCurrentUser,
  submit,
};

export default connect(mapStateToProps, mapDispatchToProps)(EditProfilePage);
