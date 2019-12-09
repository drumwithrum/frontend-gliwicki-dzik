import React, { FC } from 'react';
import { Input } from 'components';
import { Wrapper } from './LoginForm.style';

interface NavItemProps {
}

const NavItem: FC = (props: NavItemProps) => {
  return (
    <Wrapper>
      <Input name="login" />
      <Input name="password" type="password" />
    </Wrapper>
  );
};

export default NavItem;
