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

const UserMenu: FC<UserMenuProps> = ({ title = '' }) => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const handleOpen = () => {
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <Wrapper>
      <UserIconContainer onClick={handleOpen}>
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
