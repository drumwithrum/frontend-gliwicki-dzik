import { ListItem as BaseListItem } from '@material-ui/core';
import styled from 'styled-components';
import { style } from 'config';

const { palette: { white, grey, black, primary: { main } } } = style;

export const Wrapper = styled('div')`
  height: 100%;
  width: 100%;
  display: flex;
`;

export const ListItem = styled(BaseListItem)`
  border: 1px solid ${grey} !important;
  background-color: ${(p: any) => p.isActive ? main : 'none'} !important;
  color: ${(p: any) => p.isActive ? white : black} !important;
  transition: all 2s;
` as any;
