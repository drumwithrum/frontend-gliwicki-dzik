import React, { Component } from 'react';
import NavItem from './NavItem';
import { routing } from 'config';
import { withRouter, RouteComponentProps } from 'react-router';
import UserMenu from './UserMenu';
import { Wrapper, LogoContainer, NavItemsContainer } from './AppBar.style';

interface AppBarProps extends RouteComponentProps {
}

class AppBar extends Component<AppBarProps> {
  public render() {
    return (
      <Wrapper>
        <LogoContainer>
          gliwicki dzik
        </LogoContainer>
        <NavItemsContainer>
          {routing.routeTitles
            .map((item) => {
              const currentPath = window.location.pathname;
              const url = routing.getUrl(item);
              const isActive = currentPath.toLowerCase().includes(url);
              return (
                <NavItem
                  key={item}
                  title={item}
                  active={isActive}
                  onClick={(e: React.MouseEvent) => this.handleItemClick(e, url)}
                />
              );
            })
          }
          <UserMenu />
        </NavItemsContainer>
      </Wrapper>
    );
  }

  private handleItemClick = (e: React.MouseEvent , url: string) => {
    const { history } = this.props;
    e.stopPropagation();
    history.push(url);
  }
}

export default withRouter(AppBar);
