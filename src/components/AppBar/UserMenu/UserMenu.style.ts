import styled from 'styled-components';
import { style } from 'config';
import BaseMenu from '@material-ui/core/Menu';
import BaseExpansionPanel from '@material-ui/core/ExpansionPanel';
import BaseExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import BaseExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import { Button } from 'components';

const { palette: { white, grey } } = style;

export const UserIconContainer = styled(Button)`
  position: relative;
  background-color: ${white};
  height: 42px;
  width: 42px;
  border-radius: 100px;
  overflow: hidden;
  padding: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const UserIcon = styled('img')`
  height: 90%;
  width: 90%;
`;

export const Wrapper = styled('div')`
`;

export const Menu = styled(BaseMenu)`
  & div:nth-child(3) {
    top: ${style.APPBAR_HEIGHT}px !important;
    right: 0px !important;
  };
`;

export const ExpansionPanel = styled(BaseExpansionPanel)`
  position: absolute !important;
  margin: 0px !important;
  top: ${style.APPBAR_HEIGHT}px !important;
  right: 0px;
  /* color: red; */
`;
export const ExpansionPanelSummary = styled(BaseExpansionPanelSummary)`
  display: none !important;
`;

export const ExpansionPanelDetails = styled(BaseExpansionPanelDetails)`
  padding: 0px !important;
  display: flex;
  flex-direction: column;
`;
