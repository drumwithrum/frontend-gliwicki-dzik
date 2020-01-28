import styled from 'styled-components';
import { style } from 'config';

const { palette: { white, grey, black, primary: { main } } } = style;

export const Wrapper = styled('div')`
  box-sizing:border-box;
  display: flex;
  padding: 16px;
  background-color: ${white};
`;

export const ListWrapper = styled('div')`
  width: 300px;
  padding-right: 16px;
`;

export const PlayerWrapper = styled('div')`
  background-color: ${black};
`;
