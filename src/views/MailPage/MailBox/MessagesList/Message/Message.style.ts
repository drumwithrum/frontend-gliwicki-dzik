import styled from 'styled-components';
import { style } from 'config';

const { palette: { white, grey, black, primary: { main } } } = style;

interface Props {
  sent: boolean;
}

export const Wrapper = styled('div')`
  width: 100%;
  padding: 4px;
  display: flex;
  justify-content: ${(p: Props) => p.sent ? 'flex-end' : 'flex-start'};
` as any;

export const MessageWrapper = styled('div')`
  max-width: 80%;
  padding: 6px 12px;
  font-family: Montserrat;
  border-radius: 100px;
  color: ${(p: Props) => p.sent ? white : black};
  background-color: ${(p: Props) => p.sent ? main : grey[100]};
` as any;
