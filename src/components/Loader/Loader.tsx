import React from 'react';
import {Spinner} from './Loader.styles';

interface LoaderProps {
  width?: string;
  height?: string;
  color?: string;
}

const Loader: React.FC<LoaderProps> = (props: LoaderProps) => {
  return <Spinner {...{props}} />;
};

export default Loader;
