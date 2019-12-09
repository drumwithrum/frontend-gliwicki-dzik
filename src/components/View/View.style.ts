import styled from 'styled-components';
import { style } from 'config';

export const Wrapper = styled('div')`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding-top: ${style.APPBAR_HEIGHT}px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
