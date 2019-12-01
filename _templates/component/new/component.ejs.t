---
to: src/components/<%= name %>/<%= name %>.tsx
---
<% pName = h.changeCase.paramCase(name) %>import React, { FC } from 'react';
import { Wrapper } from './<%= name %>.style';

interface <%= name %>Props {
}

const <%= name %>: FC = (props: <%= name %>Props) => {
  return (
    <Wrapper>
      This is your <%= name %> component!
    </Wrapper>
  );
};

export default <%= name %>;
