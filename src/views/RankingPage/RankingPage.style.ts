import styled from 'styled-components';
import {View} from 'components';
import backgroundSrc from './images/gym.jpg';
import {style} from 'config/index';

const { palette: { white, grey, black, primary: { main } } } = style;

export const Wrapper = styled(View)`
  background-color: black;
  overflow: hidden;
`;

export const Layout = styled('div')`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  margin: -5px -5px -5px -5px;
  background-image: url('${backgroundSrc}');
  background-size: cover;
  filter: blur(4px);
`;

export const Content = styled('div')`
  z-index: 99;
`;

export const Container = styled('div')`
  box-sizing:border-box;
  display: flex;
  flex-wrap: wrap;
  flex-direction: ${(p: any) => p.flex || 'row'};
  padding: 16px;
  background-color: ${white};
  align-items: ${(p: any) => p.align || 'center'};
  min-height: 500px;
  min-width: 500px;
  justify-content: center;
`;

export const ErrorMessage = styled('p')`
  font-size: 1.5em;
  color: red;
  text-align: center;
`;
