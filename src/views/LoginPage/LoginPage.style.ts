import styled from 'styled-components';
import backgroundSrc from './images/bg.jpg';
import { View } from 'components';
import { style } from 'config';

const { palette: { white, grey, primary } } = style;

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

export const FormWrapper = styled('div')`
  min-width: 400px;
  min-height: 550px;
  background-color: ${white};
`;

export const Header = styled('div')`
  color: ${primary.main};
  font-size: 24px;
`;

export const Content = styled('div')`
  z-index: 999;
  display: flex;
  flex-direction: column;
`;
