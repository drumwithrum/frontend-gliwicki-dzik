import React from 'react';
import { Wrapper, Layout, Content, Container, ErrorMessage, Title } from './RankingPage.style';
import RankingTable from './RankingTable';
import {connect} from 'react-redux';
import {getUsersRecords} from 'store/usersRecords/actions';
import {error, isFetching, usersRecords} from 'store/usersRecords/selector';
import Store, {UserRecord} from 'types/store/UsersRecordsStore';
import {Error, RankingUser} from 'types/store/UsersStore';
import Loader from 'components/Loader';

interface DispatchProps {
  getUsersRecords(params: {[key: string]: number | string}): void;
}

interface StateProps {
  isFetching: boolean;
  data: UserRecord[] | undefined;
  error?: Error | null;
}

type Props = DispatchProps & StateProps;

class RankingPage extends React.Component<Props> {
  public componentDidMount(): void {
    const {getUsersRecords} = this.props;
    getUsersRecords({PageSize: 10});
  }

  public getHeaders() {
    return ['No.', 'name', 'age', 'weight', 'bicepsSize'];
  }
  public getTableData(): null | RankingUser[] {
    const {data} = this.props;
    return data ? data
      .map((elem: UserRecord, index: number) => {
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
    if (isFetching) {
      return <Loader />;
    }
    if (error) {
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
            <Title>
              Raking Bicepsów!
            </Title>
            {this.renderContent()}
          </Container>
        </Content>
      </Wrapper>
    );
  }
}

const mapStateToProps = (state: Store): StateProps => ({
  isFetching: isFetching(state),
  data: usersRecords(state),
  error: error(state),
});

const mapDispatchToProps = {
  getUsersRecords,
};

export default connect(mapStateToProps, mapDispatchToProps)(RankingPage);
