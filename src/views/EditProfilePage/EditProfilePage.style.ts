import styled from 'styled-components';
import { View } from 'components';
import backgroundSrc from './images/gym.jpg';
import { style } from 'config';

const { palette: { white, grey, black, primary: { main } } } = style;

export const Wrapper = styled(View)`
  background-color: ${black};
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
  background-color: ${white};
  padding: 24px;
`;

export const BottomWrapper = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Title = styled('div')`
  color: ${main};
  font-size: 48px;
  padding-left: 48px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  margin-bottom: 32px;
`;

export const Subtitle = styled('div')`
  color: ${main};
  font-size: 16px;
  padding-left: 48px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  margin-bottom: 4px;
`;
