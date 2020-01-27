import styled from 'styled-components';
import { style } from 'config';
import TextField from '@material-ui/core/TextField';

const { palette: { white, black, grey, primary } } = style;

interface DatePickerProps {
  color?: string;
  backgroundColor?: string;
}

export const Wrapper = styled('div')`
  min-height: 42px;
  width: 100%;
  position: relative;
`;

export const DatePickerBase = styled(TextField)`
  width: 100%;
  & input {
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
    color: ${(p: DatePickerProps) => p.color || primary.main};
    background-color: ${(p: DatePickerProps) => p.backgroundColor || white};
    border: 2px solid ${(p: DatePickerProps) => p.color || primary.main};
  }
` as any;

export const Label = styled.div<DatePickerProps>`
  font-family: Montserrat;
  font-size: 14px;
  color: ${(p: any) => p.color || primary.main};
`;
