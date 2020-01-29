import styled from 'styled-components';
import { style } from 'config';
import Grid from '@material-ui/core/Grid';

const { palette: { white, grey, black, primary: { main } } } = style;

export const Wrapper = styled('div')`
`;

export const Content = styled(Grid)`
  padding: 32px 48px 12px 48px;
`;

export const FieldWrapper = styled(Grid)`
  margin-bottom: 24px !important;
  width: 160px;
  &:nth-child(even) {
    padding-left: 16px;
  };
  &:nth-child(odd) {
    padding-right: 16px;
  };
`;
