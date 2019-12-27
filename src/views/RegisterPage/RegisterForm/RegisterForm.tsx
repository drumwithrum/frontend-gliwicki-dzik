import React, { FC } from 'react';
import { Wrapper, Input } from './RegisterForm.style';

interface NavItemProps {
}

const NavItem: FC = (props: NavItemProps) => {
  return (
    <Wrapper>
      <Input name="login" label="Nazwa użytkownika" />
      <Input name="password" type="password" label="Hasło" />
      <Input name="email" type="email" label="E-mail" />
      <Input name="bicep" type="number" label="Obwód bicepsa (cm)" />
    </Wrapper>
  );
};

export default NavItem;
