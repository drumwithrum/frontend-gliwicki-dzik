import React, { PureComponent } from 'react';
import { Wrapper, Layout, Content, Container, ErrorTxt } from './SingleUserPage.styles';
import {withRouter, RouteComponentProps} from 'react-router';
import {connect} from 'react-redux';
import {compose} from 'redux';

import Store, {SingleUser, Error} from 'types/store/SingleUserStore';
import SingleUserProfile from './SingleUserProfile';
import {error, isFetching, singleUser} from 'store/singleUser/selector';
import {getSingleUser} from 'store/singleUser/actions';
import Loader from 'components/Loader';

interface DispatchProps {
  getSingleUser(userId: string): void;
}

interface StateProps {
  isFetching: boolean;
  data: SingleUser | null;
  error?: Error | null;
}

type SingleUserPageProps = DispatchProps & StateProps & RouteComponentProps<{id: string}>;

class SingleUserPage extends PureComponent<SingleUserPageProps> {
  public static defaultProps = {
  };
  public componentDidMount() {
    const {getSingleUser, match} = this.props;
    getSingleUser(match.params.id);
  }

  public renderContent(): JSX.Element {
    const {isFetching, error, data} = this.props;
    if (isFetching) {
      return <Loader />;
    }
    if (error) {
      return <ErrorTxt>{error.message}</ErrorTxt>;
    }
    return <SingleUserProfile user={data} />;
  }

  public render() {
    return(
      <Wrapper>
        <Layout />
        <Content>
          <Container align={'flex-start'} flex={'column'}>
            {this.renderContent()}
          </Container>
        </Content>
      </Wrapper>
    );
  }
}

const mapStateToProps = (state: Store): StateProps => ({
  isFetching: isFetching(state),
  data: singleUser(state),
  error: error(state),
});

const mapDispatchToProps = {
  getSingleUser,
};

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps),
)(SingleUserPage) as () => JSX.Element;
