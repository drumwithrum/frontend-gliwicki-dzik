import React, { FC } from 'react';
import { Wrapper } from './Bochenek.style';

interface BochenekProps {
}

const Bochenek: FC = (props: BochenekProps) => {
  const { t, i18n } = useTranslation();
  return (
    <Wrapper>
      This is your Bochenek component!
    </Wrapper>
  );
};

export default Bochenek;
