import styled from 'styled-components';
import { style } from 'config';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

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

export const SelectBase = styled(Select)`
  height: 42px;
  width: 100%;
  padding: 0px;
  display: flex;
  align-items: center;
  outline: none;
  border: none;
  box-sizing: border-box;
  background-color: ${(p: InputProps) => p.backgroundColor || white};
  border: 2px solid ${(p: InputProps) => p.color || primary.main};
  &::placeholder {
    color: ${(p: InputProps) => p.color || primary.main}};
  };
  & > div {
    padding-left: 15px;
    color: ${(p: InputProps) => p.color || primary.main};
    background-color: ${(p: InputProps) => p.backgroundColor || white};
    font-size: 12px;
    line-height: 15px;
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    &:focus {
      background-color: ${(p: InputProps) => p.backgroundColor || white};
    }
  };
`;
export const SelectItem = styled(MenuItem)`
    padding-left: 15px !important;
    color: ${(p: InputProps) => p.color || primary.main} !important;
    background-color: ${(p: InputProps) => p.backgroundColor || white} !important;
    font-size: 12px !important;
    line-height: 15px !important;
    font-family: Montserrat !important;
    font-style: normal !important;
    font-weight: normal !important;
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
