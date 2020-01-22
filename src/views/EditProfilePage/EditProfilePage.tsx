import React, { PureComponent } from 'react';
import { Wrapper, Layout, Content } from './EditProfilePage.style';

interface EditProfilePageProps {
}

class EditProfilePage extends PureComponent<EditProfilePageProps> {
  public static defaultProps = {
  };

  public render() {
    return(
      <Wrapper>
        <Layout />
        <Content>
          eluwina
        </Content>
      </Wrapper>
    );
  }
}

export default EditProfilePage;
