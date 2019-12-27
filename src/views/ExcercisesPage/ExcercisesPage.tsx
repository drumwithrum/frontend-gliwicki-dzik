import React, { FC } from 'react';
import { Wrapper, Layout, Content } from './ExcercisesPage.style';
import ExcercisesGallery from './ExcercisesGallery';

interface ExcercisesPageProps {
}

const ExcercisesPage: FC = (props: ExcercisesPageProps) => {
  return (
    <Wrapper>
      <Layout />
      <Content>
        <ExcercisesGallery />
      </Content>
    </Wrapper>
  );
};

export default ExcercisesPage;
