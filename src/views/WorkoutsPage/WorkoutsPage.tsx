import React, { FC } from 'react';
import WorkoutsMenu from './WorkoutsMenu';
import { Wrapper, Layout, Content } from './WorkoutsPage.style';

interface WorkoutsPageProps {
}

const workouts = [{
  id: '1',
  title: 'Klata',
}, {
  id: '2',
  title: 'Łapy',
}];

const WorkoutsPage: FC = (props: WorkoutsPageProps) => {
  return (
    <Wrapper>
      <Layout />
      <Content>
        <WorkoutsMenu workouts={workouts} />
      </Content>
    </Wrapper>
  );
};

export default WorkoutsPage;
