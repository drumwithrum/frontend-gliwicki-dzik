import styled from 'styled-components';
import {style} from 'config/index';

const { palette: { white, grey, black, primary: { main } } } = style;

export const InputWrapper = styled('div')`
  margin: .5em 0;
  width: 60%;
`;

export const Content = styled('div')`
  z-index: 99;
  min-width: 500px;
  min-height: 500px;
`;
