import styled from 'styled-components';
import { List as BaseList, ListItem as BaseListItem } from '@material-ui/core';
import { style } from 'config';

const { palette: { white, grey, black, primary: { main } } } = style;

export const Wrapper = styled('div')`
  height: 100%;
  width: 100%;
  height: 100%;
  width: 160px;
  background-color: ${white};
`;

export const Title = styled('div')`
  font-size: 16px;
  font-family: Montserrat;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  align-items: center;
`;

export const List = styled(BaseList)`
  height: 100%;
` as any;
