import React, { FC } from 'react';
import { Bochenek } from 'components';

interface StartingPageProps {
}

const StartingPage: FC = (props: StartingPageProps) => {
  return (
    <div className="wrapper">
      This is your StartingPage component!
      <Bochenek />
    </div>
  );
};

export default StartingPage;
