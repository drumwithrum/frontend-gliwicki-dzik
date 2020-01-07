import { ListItem as BaseListItem } from '@material-ui/core';
import styled from 'styled-components';
import { style } from 'config';

const { palette: { white, grey, black, primary: { main } } } = style;

export const Wrapper = styled('div')`
  width: 100%;
  background-color: transparent;
  padding: 4px 8px;
  box-sizing: border-box;
` as any;

export const Content = styled('div')`
  height: 100%;
  width: 100%;
  background-color: white;
  box-sizing: border-box;
  border-radius: 2px;
  border: 1px solid red;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
` as any;
