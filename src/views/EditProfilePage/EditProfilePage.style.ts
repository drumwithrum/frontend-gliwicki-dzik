import styled from 'styled-components';
import {View} from 'components';
import backgroundSrc from './images/gym.jpg';
import {style} from "config/index";

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
