import React, { Component } from 'react';
import { compose } from 'redux';
import { withRouter, RouteComponentProps } from 'react-router';
import { connect } from 'react-redux';
import { fetchAllExcercises, fetchAllWorkouts } from 'store/excercises/actions';
import { isAddWorkoutFailure } from 'store/excercises/selectors';
import WorkoutsMenu from './WorkoutsMenu';
import { Wrapper, Layout, Content } from './WorkoutsPage.style';

interface WorkoutsPageProps extends RouteComponentProps {
  fetchAllExcercises: typeof fetchAllExcercises;
  fetchAllWorkouts: typeof fetchAllWorkouts;
  isAddWorkoutFailure: boolean;
}

const workouts = [{
  id: '1',
  title: 'Klata',
}, {
  id: '2',
  title: 'Łapy',
}];

class WorkoutsPage extends Component<WorkoutsPageProps> {
  public componentDidMount() {
    const { fetchAllExcercises, fetchAllWorkouts } = this.props;
    fetchAllExcercises();
    fetchAllWorkouts ();
  }
  public render() {
    return (
      <Wrapper>
        <Layout />
        <Content>
          <WorkoutsMenu />
        </Content>
      </Wrapper>
    );
  }
}

const mapStateToProps = (state: any) => ({
  isAddWorkoutFailure: isAddWorkoutFailure(state),
});

const mapDispatchToProps = {
  fetchAllWorkouts,
  fetchAllExcercises,
};

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps),
)(WorkoutsPage) as () => JSX.Element;
