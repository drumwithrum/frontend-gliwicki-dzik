import styled from 'styled-components';
import { style } from 'config';

const { palette: { white, grey, black, primary: { main } } } = style;

interface Props {
  sent: boolean;
}

export const Wrapper = styled('div')`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
`;

export const MessageTextArea = styled('textarea')`
  width: 90%;
  height: 100%;
  resize: none;
  font-family: Montserrat;
  padding: 4px 8px;
  box-sizing: border-box;
  border: none;
  border-radius: 12px;
  background-color: ${grey[100]};
  outline: none;
` as any;

export const Icon = styled('img')`
  width: 32px;
  height: 32px;
` as any;

export const IconWrapper = styled('div')`
  width: 10%;
  display: flex;
  justify-content: center;
` as any;
