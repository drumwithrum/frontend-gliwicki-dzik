import React, { FC } from 'react';
import { Wrapper } from './NavItem.style';

interface NavItemProps {
}

const NavItem: FC = (props: NavItemProps) => {
  return (
    <Wrapper>
      This is your NavItem component!
    </Wrapper>
  );
};

export default NavItem;
