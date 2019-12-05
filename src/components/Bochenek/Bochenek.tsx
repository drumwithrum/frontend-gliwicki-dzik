import React, { FC } from 'react';
import { Wrapper } from './Bochenek.style';

interface BochenekProps {
}

const Bochenek: FC = (props: BochenekProps) => {
  return (
    <Wrapper>
      This is your Bochenek component!
    </Wrapper>
  );
};

export default Bochenek;
