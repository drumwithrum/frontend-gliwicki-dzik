import styled from 'styled-components';
import { style } from 'config';

const { palette: { white, grey, black, primary: { main } } } = style;

export const Wrapper = styled('div')`
  box-sizing:border-box;
  display: flex;
  flex-wrap: wrap;
  flex-direction: ${(p: any) => p.flex || 'row'};
  padding: 16px;
  background-color: ${white};
  align-items: ${(p: any) => p.align || 'center'};
  height: 500px;
  justify-content: center;
`;

export const Title = styled('div')`
  font-size: ${(p: any) => p.size || 16}px;
  font-family: Montserrat;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  align-items: center;
  color: ${main};
`;

export const Body = styled('div')`
height: 80%;
display: flex;
`;
