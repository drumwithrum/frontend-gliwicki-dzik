import React, { Component } from 'react';
import { AppBar } from 'components';
import { Wrapper } from './View.style';

interface ViewProps {
  hideAppBar?: boolean;
}

class View extends Component<ViewProps> {
  public static defaultProps = {
    hideAppBar: false,
  };

  public render() {
    const { children, hideAppBar, ...props } = this.props;
    return (
    <Wrapper {...props}>
      {!hideAppBar && <AppBar />}
      {children}
    </Wrapper>
    );
  }
}

export default View;
