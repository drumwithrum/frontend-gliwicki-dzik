import styled from 'styled-components';
import { style } from 'config';

const { palette: { primary } } = style;

export const Wrapper = styled('div')`
  color: ${style.palette.white};
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 4px;
  padding-bottom: 4px;
  font-weight: bold;
  border-bottom: ${(p: {active: boolean}) => p.active ? `3px solid ${primary.main}` : '3px solid transparent'};
  cursor: pointer;
`;
