import styled from 'styled-components';
import { style } from 'config';

const { palette: { white, grey } } = style;

export const Wrapper = styled('div')`
  width: 100%;
  height: ${style.APPBAR_HEIGHT}px;
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 40px;
  top: 0;
  box-sizing: border-box;
  background-color: ${grey[900]};
  z-index: 999;
`;

export const LogoContainer = styled('div')`
  padding: 6px;
  text-transform: uppercase;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${white};
  cursor: pointer;
  border: 2px solid ${white};
`;

export const NavItemsContainer = styled('div')`
  display: flex;
`;
