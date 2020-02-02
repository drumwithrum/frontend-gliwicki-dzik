import React, { PureComponent } from 'react';
import { Wrapper, Layout, Content } from './SingleUserPage.styles';

import SingleUserProfile from './SingleUserProfile';

interface SingleUserPageProps {
}

class SingleUserPage extends PureComponent<SingleUserPageProps> {
  public static defaultProps = {
  };

  public render() {
    return(
      <Wrapper>
        <Layout />
        <Content>
          <SingleUserProfile />
        </Content>
      </Wrapper>
    );
  }
}

export default SingleUserPage;
