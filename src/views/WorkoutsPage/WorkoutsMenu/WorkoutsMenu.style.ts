import styled from 'styled-components';
import { style } from 'config';
import { Button as BaseButton } from 'components';

const { palette: { white, grey, black, primary: { main } } } = style;

export const Wrapper = styled('div')`
  box-sizing:border-box;
  display: flex;
  flex-direction: ${(p: any) => p.flex || 'row'};
  padding: 16px;
  background-color: ${white};
  align-items: ${(p: any) => p.align || 'center'};
  height: 500px;
  justify-content: ${(p: any) => p.justify || 'flex-start'};
` as any;

export const ListWrapper = styled('div')`
  width: 300px;
  padding-right: 16px;
  flex-direction: ${(p: any) => p.flex || 'row'};
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow-y: auto;
`;

export const PlayerWrapper = styled('div')`
  background-color: ${black};
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
` as any;

export const Button = styled(BaseButton)`
  margin-top: 12px;
`;

export const Body = styled('div')`
  display: flex;
  height: 80%;
`;

export const Footer = styled('div')`
  display: flex;
  justify-content: center;
  width: 100%;
`;
