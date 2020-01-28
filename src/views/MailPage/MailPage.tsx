import React, { PureComponent } from 'react';
import { Wrapper, Layout, Content } from './MailPage.style';
import MailBox from './MailBox';

interface MailPageProps {
}

class MailPage extends PureComponent<MailPageProps> {
  public static defaultProps = {
  };

  public render() {
    return(
      <Wrapper>
        <Layout />
        <Content>
          <MailBox />
        </Content>
      </Wrapper>
    );
  }
}

export default MailPage;
