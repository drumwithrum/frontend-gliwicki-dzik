import styled from 'styled-components';
import backgroundSrc from './images/bg.jpg';
import { View, Button as BaseButton } from 'components';
import { style } from 'config';

const { palette: { white, grey, primary: { light, main } } } = style;

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
  width: 400px;
  min-height: 550px;
  background-color: ${white};
  padding: 32px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Header = styled('div')`
  color: ${main};
  font-size: 24px;
  align-self: flex-start;
  margin-bottom: 32px;
`;

export const Content = styled('div')`
  z-index: 999;
  display: flex;
  flex-direction: column;
`;

export const Typography = styled('div')`
  font-family: Montserrat;
  font-size: 12px;
  & span {
    cursor: pointer;
    font-weight: bold;
    margin-left: 4px;
    margin-right: 4px;
  }
`;

export const Button = styled(BaseButton)`
  margin-top: 32px;
  width: 100%;
  margin-bottom: 16px;
`;

export const ErrorMessage = styled('div')`
  font-family: Montserrat;
  font-size: 14px;
  color: ${light};
  margin-top: 12px;
`;
