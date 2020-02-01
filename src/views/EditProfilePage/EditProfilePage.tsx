import React, { PureComponent } from 'react';
import { Wrapper, Layout, Content, BottomWrapper, Title, Subtitle } from './EditProfilePage.style';
import { connect } from 'react-redux';
import State from 'types/store';
import { getCurrentUser } from 'store/user/selectors';
import EditProfileForm from './EditProfileForm';
import { getDate } from 'utils/date';
import { User } from 'types/Api/user';
import { Button } from 'components';
import { submit } from 'redux-form';

interface EditProfilePageProps {
  submit: typeof submit;
  currentUser: User | null;
}

class EditProfilePage extends PureComponent<EditProfilePageProps> {
  public static defaultProps = {
  };

  public render() {
    const { submit, currentUser } = this.props;
    return(
      <Wrapper>
        <Layout />
        <Content>
          <Title>
            Edytuj swój profil
          </Title>
          {currentUser && this.renderUserData()}
          <EditProfileForm />
          <BottomWrapper>
            <Button onClick={() => submit('edit-profile-form')}>Zapisz</Button>
          </BottomWrapper>
        </Content>
      </Wrapper>
    );
  }

  private renderUserData = () => {
    const { currentUser } = this.props;
    const user = currentUser!;
    let genderTitle = user.gender.includes('female') ? 'Zalogowana dzikuska: ' : 'Zalogowany dzikus: ';
    genderTitle = `${genderTitle}${user.username}`;
    return (
      <>
        <Subtitle>
          {genderTitle}
        </Subtitle>
        <Subtitle>
          {`Twój email: ${user.email}`}
        </Subtitle>
        <Subtitle>
          {`Jesteś z nami od: ${getDate(user.dateOfCreated)}`}
        </Subtitle>
      </>
    );
  }
}

const mapStateToProps = (state: State) => ({
  currentUser: getCurrentUser(state),
});

const mapDispatchToProps = {
  submit,
};

export default connect(mapStateToProps, mapDispatchToProps)(EditProfilePage);
