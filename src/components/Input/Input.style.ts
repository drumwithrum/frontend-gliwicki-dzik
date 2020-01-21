import styled from 'styled-components';
import { style } from 'config';

const { palette: { white, black, grey, primary } } = style;

interface InputProps {
  color?: string;
  backgroundColor?: string;
}

export const Wrapper = styled('div')`
  min-height: 42px;
  width: 100%;
  position: relative;
`;

export const InputBase = styled.input<InputProps>`
  height: 100%;
  height: 42px;
  width: 100%;
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 15px;
  padding: 0px;
  padding-left: 15px;
  display: flex;
  align-items: center;
  outline: none;
  border: none;
  box-sizing: border-box;
  color: ${(p: InputProps) => p.color || primary.main};
  background-color: ${(p: InputProps) => p.backgroundColor || white};
  border: 2px solid ${(p: InputProps) => p.color || primary.main};
  &::placeholder {
    color: ${(p: InputProps) => p.color || primary.main}};
  }
`;

export const Icon = styled('img')`
  height: 22px;
  width: 22px;
  bottom: 10px;
  position: absolute;
  right: 10px;
`;

export const Label = styled.div<InputProps>`
  font-family: Montserrat;
  font-size: 14px;
  color: ${(p: any) => p.color || primary.main};
`;
