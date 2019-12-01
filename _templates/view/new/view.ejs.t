---
to: src/views/<%= name %>/<%= name %>.tsx
---
<% pName = h.changeCase.paramCase(name) %>import React, { PureComponent } from 'react';
import { Wrapper } from './<%= name %>.style';

interface <%= name %>Props {
}

class <%= name %> extends PureComponent<<%= name %>Props> {
  public static defaultProps = {
  };

  public render() {
    return(
      <Wrapper>
        This is your <%= name %> view!
      </Wrapper>
    )
  }
}

export default <%= name %>
