import styled, { keyframes } from 'styled-components';
import { style } from 'config';

const { palette: { white, grey, primary } } = style;
export const ButtonBase = styled('button')`
  border: none;
  outline: none;
  padding: 8px 20px;
  background-color: ${(p: { color?: string}) => p.color || primary.main};
  color: ${white};
  position: relative;
  text-transform: uppercase;
  overflow: hidden;
  cursor: pointer;
`;

const ripple = keyframes`
  to {
    transform: scale(2.5);
    opacity: 0;
  }
`;

export const Ripple = styled('div')`
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.5);
  position: absolute;
  transform: scale(0);
  animation: ${ripple} 0.6s linear;
`;
