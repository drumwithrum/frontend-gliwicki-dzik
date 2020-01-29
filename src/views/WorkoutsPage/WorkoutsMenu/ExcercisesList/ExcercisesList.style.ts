import styled from 'styled-components';
import { ListItem as BaseListItem } from '@material-ui/core';
import { style } from 'config';

const { palette: { white, grey, black, primary: { main } } } = style;

export const AddIcon = styled('div')`
  width: 32px;
  height: 32px;
  margin-right: 8px;
  background-color: ${main};
  font-size: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  color: ${white};
  font-weight: bold;
  box-sizing: border-box;
  padding-bottom: 5px;
`;

export const Wrapper = styled('div')`
  height: 100%;
  width: 100%;
  box-sizing:border-box;
  background-color: white;
`;

export const ListItem = styled(BaseListItem)`
  background-color: ${(p: any) => p.isActive ? main : 'none'} !important;
  color: ${(p: any) => p.isActive ? white : black} !important;
  transition: all 2s;
  &:not(:last-child) {
    border-bottom: ${(p: any) => p.isActive ? 'none' : `1px solid ${black}`};
  }
` as any;

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
