import React, { FC, useEffect } from 'react';
import {
  UserIcon,
  UserIconContainer,
  Wrapper,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  ExpansionPanel,
} from './UserMenu.style';
import MenuItem from '@material-ui/core/MenuItem';
import userIcon from '../icons/user.svg';

interface UserMenuProps {
  title?: string;
}

const USER_MENU_ID = 'user-menu';

const UserMenu: FC<UserMenuProps> = ({ title = '' }) => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  const onWindowClick = (e: any) => {
    setIsOpen(false);
  };

  useEffect(() => {
    window.addEventListener('click', onWindowClick);
  });

  const handleClose = (e: any) => {
    e.stopPropagation();
    setIsOpen(false);
  };

  const toggleMenu = (e: any) => {
    e.stopPropagation();
    setIsOpen(!isOpen);
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
          <MenuItem onClick={handleClose}>Mój profil</MenuItem>
          <MenuItem onClick={handleClose}>Wyloguj</MenuItem>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </Wrapper>
  );
};

export default UserMenu;
