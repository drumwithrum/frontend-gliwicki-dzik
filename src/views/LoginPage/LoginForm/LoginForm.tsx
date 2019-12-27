import React, { FC } from 'react';
import { Wrapper, Input } from './LoginForm.style';

interface NavItemProps {
}

const NavItem: FC = (props: NavItemProps) => {
  return (
    <Wrapper>
      <Input name="login" label="Nazwa użytkownika" />
      <Input name="password" type="password" label="Hasło" />
    </Wrapper>
  );
};

export default NavItem;
