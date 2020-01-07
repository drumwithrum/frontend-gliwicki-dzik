import React, { Component } from 'react';
import NavItem from './NavItem';
import { routing } from 'config';
import { withRouter, RouteComponentProps } from 'react-router';
import { Wrapper, LogoContainer, NavItemsContainer } from './AppBar.style';

interface AppBarProps extends RouteComponentProps {
}

class AppBar extends Component<AppBarProps> {
  public render() {
    const { history } = this.props;
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
                  onClick={() => history.push(url)}
                />
              );
            })
          }
        </NavItemsContainer>
      </Wrapper>
    );
  }
}

export default withRouter(AppBar);
