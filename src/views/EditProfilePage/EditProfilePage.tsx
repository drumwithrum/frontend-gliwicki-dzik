import React, { PureComponent } from 'react';
import { Wrapper, Layout, Content } from './EditProfilePage.style';
import { connect } from 'react-redux';
import State from 'types/store';
import EditProfileForm from './EditProfileForm';
import { Button } from 'components';
import { submit } from 'redux-form';

interface EditProfilePageProps {
  submit: typeof submit;
}

class EditProfilePage extends PureComponent<EditProfilePageProps> {
  public static defaultProps = {
  };

  public render() {
    const { submit } = this.props;
    return(
      <Wrapper>
        <Layout />
        <Content>
          <EditProfileForm />
          <Button onClick={() => submit('edit-profile-form')}>Zapisz</Button>
        </Content>
      </Wrapper>
    );
  }
}

const mapStateToProps = (state: State) => ({
});

const mapDispatchToProps = {
  submit,
};

export default connect(mapStateToProps, mapDispatchToProps)(EditProfilePage);
