import React, { Component } from 'react';
import NavItem from './NavItem';
import { Wrapper, LogoContainer, NavItemsContainer } from './AppBar.style';

interface AppBarProps {
}

class AppBar extends Component<AppBarProps> {
  public paths: string[] = ['Start', 'Atlas ćwiczeń', 'Treningi'];
  public render() {
    return (
    <Wrapper>
      <LogoContainer>
        gliwicki dzik
      </LogoContainer>
      <NavItemsContainer>
        {this.paths.map((item) => <NavItem key={item} title={item} active={item === 'Start'}/>)}
      </NavItemsContainer>
    </Wrapper>
    );
  }
}

export default AppBar;
