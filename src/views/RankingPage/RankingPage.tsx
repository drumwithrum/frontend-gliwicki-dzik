import React, { PureComponent } from 'react';
import { Wrapper, Layout, Content } from './RankingPage.style';
import RankingTable from './RankingTable';

interface RankingPageProps {
}

class RankingPage extends PureComponent<RankingPageProps> {
  public static defaultProps = {
  };

  public render() {
    return(
      <Wrapper>
        <Layout />
        <Content>
          <RankingTable />
        </Content>
      </Wrapper>
    );
  }
}

export default RankingPage;
