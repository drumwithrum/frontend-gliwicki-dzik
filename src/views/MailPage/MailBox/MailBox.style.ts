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

export const MessagesWrapper = styled('div')`
  width: 500px;
  height: 500px;
  box-sizing: border-box;
  border: 1px solid #E8E8E8;
  margin-bottom: 16px;
`;
export const RightSegment = styled('div')`
  display: flex;
  flex-direction: column;
`;
export const MessageBoxWrapper = styled('div')`
  width: 100%;
  min-height: 100px;
`;
