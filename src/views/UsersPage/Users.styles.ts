import styled from 'styled-components';
import {View} from 'components';
import backgroundSrc from '../RankingPage/images/gym.jpg';
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
  flex-direction: ${(p: any) => p.flex || 'row'};
  padding: 16px;
  background-color: ${white};
  align-items: center;
  flex-direction: column;
  min-width: 500px;
  min-height: 500px;
  max-height: 800px;
  overflow-y: scroll;
`;

export const Title = styled('p')`
  font-size: ${(p: any) => p.size || 16}px;
  font-family: Montserrat;
  width: 100%;
  text-align: center;
  font-size: 1.5em;
  font-weight: 500;
`;

export const ErrorTxt = styled('p')`
  font-size: 1.5em;
  color: red;
  text-align: center;
`;
