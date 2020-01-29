import styled from 'styled-components';
import { style } from 'config';

const { palette: { white, grey, black, primary: { main } } } = style;

export const Wrapper = styled('div')`
  width: 100%;
  height: 100%;
  padding: 12px;
  box-sizing: border-box;
`;
