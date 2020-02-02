import React from 'react';
import {connect} from 'react-redux';
import {Layout, Wrapper, Content, Title, Container, ErrorTxt} from './Users.styles';
import UserList from './UsersList/UsersList';
import {getUsers} from 'store/users/actions';
import Store, {Error, User} from 'types/store/UsersStore';
import {error, isFetching, users} from 'store/users/selector';
import Loader from 'components/Loader';
import Pagination from 'components/Pagination';

interface DispatchProps {
  getUsers(params: {[key: string]: number | string}): void;
}

interface StateProps {
  isFetching: boolean;
  data: User[];
  error?: Error | null;
}

interface UsersPageState {
  page: number;
}

type UsersPageProps = DispatchProps & StateProps;

class UsersPage extends React.Component<UsersPageProps, UsersPageState> {
  public state = {
    page: 1,
  };
  public componentDidMount() {
    const {getUsers} = this.props;
    getUsers({pageSize: 10, pageNumber: this.state.page});
  }
  public onPageChange = (page: number) => {
    const {getUsers} = this.props;
    getUsers({pageSize: 10, pageNumber: page});
    this.setState({page});
  }
  public renderContent(): JSX.Element {
      const {isFetching, error, data} = this.props;
      if (isFetching) {
        return <Loader />;
      }
      if (error) {
        return <ErrorTxt>{error.message}</ErrorTxt>;
      }
      return <UserList users={data} />;
  }
  public render() {
    const {data} = this.props;
    const {page} = this.state;
    const disablePag = !data || data.length === 0 || data.length < 10;
    return(
      <Wrapper>
        <Layout/>
        <Content>
          <Container>
            <Title>
              Sprawdz jakiegos dzika !
            </Title>
            {this.renderContent()}
            <Pagination
              disableNext={disablePag}
              paginationPage={page}
              onPageChange={(pageNum) => this.onPageChange(pageNum)}
            />
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

export default connect(mapStateToProps, mapDispatchToProps)(UsersPage);
