import React, { FC } from 'react';
import { Wrapper } from './NavItem.style';

interface NavItemProps {
  active: boolean;
  title: string;
  onClick: (e: any) => any;
}

const NavItem: FC<NavItemProps> = ({ active = false, title = '', onClick }) => {
  return (
    <Wrapper active={active} onClick={onClick}>
      {title}
    </Wrapper>
  );
};

export default NavItem;
