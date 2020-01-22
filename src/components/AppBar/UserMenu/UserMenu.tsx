import React, { FC, useEffect } from 'react';
import {
  UserIcon,
  UserIconContainer,
  Wrapper,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  ExpansionPanel,
} from './UserMenu.style';
import { withRouter, RouteComponentProps } from 'react-router';
import Auth from 'utils/auth';
import Routing from 'config/routing';
import MenuItem from '@material-ui/core/MenuItem';
import userIcon from '../icons/user.svg';

interface UserMenuProps extends RouteComponentProps {
  title?: string;
}

const USER_MENU_ID = 'user-menu';

const UserMenu: FC<UserMenuProps> = ({ history }) => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  const onWindowClick = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    window.addEventListener('click', onWindowClick);
  });

  const onProfileClick = (e: React.MouseEvent) => {
    history.push(Routing.PROFILE.url);
  };

  const toggleMenu = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  const onLogout = (e: React.MouseEvent) => {
    e.stopPropagation();
    Auth.removeToken();
    history.push(Routing.LOGIN.url);
  };

  return (
    <Wrapper id={USER_MENU_ID}>
      <UserIconContainer onClick={toggleMenu}>
        <UserIcon
          src={userIcon}
        />
      </UserIconContainer>
      <ExpansionPanel expanded={isOpen}>
        <ExpansionPanelSummary />
        <ExpansionPanelDetails>
          <MenuItem onClick={onProfileClick}>Mój profil</MenuItem>
          <MenuItem onClick={onLogout}>Wyloguj</MenuItem>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </Wrapper>
  );
};

export default withRouter(UserMenu);
