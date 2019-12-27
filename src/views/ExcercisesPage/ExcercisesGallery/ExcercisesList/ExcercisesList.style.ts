import styled from 'styled-components';
import { ListItem as BaseListItem } from '@material-ui/core';
import { style } from 'config';

const { palette: { white, grey, black } } = style;

export const Wrapper = styled('div')`
  height: 100%;
  width: 100%;
  box-sizing:border-box;
  background-color: white;
`;

export const ListItem = styled(BaseListItem)`
  &:not(:last-child) {
    border-bottom: 1px solid ${black};
  }
`;

export const EmptyListResult = styled('div')`
  font-size: 16px;
  font-family: Montserrat;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  align-items: center;
`;

export const Icon = styled('img')`
  margin-top: 12px;
  height: 36px;
  width: 36px;
`;
