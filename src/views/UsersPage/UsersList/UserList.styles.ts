import styled from 'styled-components';
import {View} from 'components';
import backgroundSrc from '../RankingPage/images/gym.jpg';
import {style} from 'config/index';

const { palette: { white, grey, black, primary: { main } } } = style;

export const Wrapper = styled('div')`
  box-sizing:border-box;
  display: flex;
  flex-wrap: wrap;
  flex-direction: ${(p: any) => p.flex || 'row'};
  padding: 16px;
  background-color: ${white};
  align-items: ${(p: any) => p.align || 'center'};
  justify-content: center;
  flex-direction: column;
`;

export const InputWrapper = styled('div')`
  margin: .5em 0;
`;

export const Title = styled('p')`
  font-size: ${(p: any) => p.size || 16}px;
  font-family: Montserrat;
  width: 100%;
  text-align: center;
`;

export const Content = styled('div')`
  z-index: 99;
  min-width: 500px;
  min-height: 500px;
`;
