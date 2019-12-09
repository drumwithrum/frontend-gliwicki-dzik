import styled from 'styled-components';
import { style } from 'config';

const { palette: { white, grey } } = style;

export const Wrapper = styled('div')`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
`;
