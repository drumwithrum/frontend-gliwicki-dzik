import styled from 'styled-components';
import { Input as BaseInput } from 'components';
import { style } from 'config';

const { palette: { white, grey } } = style;

export const Wrapper = styled('div')`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  box-sizing:border-box;
`;

export const Input = styled(BaseInput)`
  &:not(:first-child) {
    margin-top: 16px;
  }
`;

export const FieldWrapper = styled('div')`
  margin-top: 16px;
`;
