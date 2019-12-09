import React, { FC } from 'react';
import { Wrapper } from './NavItem.style';

interface NavItemProps {
  active: boolean;
  title: string;
}

const NavItem: FC<NavItemProps> = ({ active = false, title = '' }) => {
  return (
    <Wrapper active={active}>
      {title}
    </Wrapper>
  );
};

export default NavItem;
