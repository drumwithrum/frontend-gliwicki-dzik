import React from 'react';
import { Wrapper, Layout, Content, Container, ErrorMessage } from './RankingPage.style';
import RankingTable from './RankingTable';
import {connect} from 'react-redux';
import {getUsers} from 'store/users/actions';
import {error, isFetching, users} from 'store/users/selector';
import Store, {Error, User, RankingUser} from '../../types/store/UsersStore';
import Loader from 'components/Loader';

interface DispatchProps {
  getUsers(): void;
}

interface StateProps {
  isFetching: boolean;
  data: User[] | undefined;
  error?: Error | null;
}

type Props = DispatchProps & StateProps;

class RankingPage extends React.Component<Props> {
  public componentDidMount(): void {
    const {getUsers} = this.props;
    getUsers();
  }

  public getHeaders() {
    return ['No.', 'name', 'age', 'weight', 'bicepsSize'];
  }
  public getTableData(): null | RankingUser[] {
    const {data} = this.props;
    return data ? data
      .sort((a: User, b: User) => b.bicepsSize - a.bicepsSize)
      .map((elem: User, index: number) => {
        return {
          id: index + 1,
          name: elem.username,
          age: elem.age,
          weight: elem.weight,
          bicepsSize: elem.bicepsSize,
        };
    }) : [];
  }

  public renderContent(): JSX.Element {
    const {isFetching, error} = this.props;
    if(isFetching) {
      return <Loader />;
    }
    if(error){
      return <ErrorMessage>{error.message}</ErrorMessage>;
    }
    return <RankingTable rows={this.getTableData()} headers={this.getHeaders()}/>;
  }

  public render() {
    return(
      <Wrapper>
        <Layout />
        <Content>
          <Container>
            {this.renderContent()}
          </Container>
        </Content>
      </Wrapper>
    );
  }
}

const mapStateToProps = (state: Store): StateProps => ({
  isFetching: isFetching(state),
  data: users(state),
  error: error(state),
});

const mapDispatchToProps = {
  getUsers,
};

export default connect(mapStateToProps, mapDispatchToProps)(RankingPage);
