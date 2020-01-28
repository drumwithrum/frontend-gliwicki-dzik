import React, { PureComponent } from 'react';
import { Wrapper, Layout, Content } from './MailPage.style';

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
          wiadomosci
        </Content>
      </Wrapper>
    );
  }
}

export default MailPage;
