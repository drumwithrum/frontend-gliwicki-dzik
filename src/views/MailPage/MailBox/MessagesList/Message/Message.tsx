import React, { FC, useState } from 'react';
import { Wrapper, MessageWrapper } from './Message.style';

interface MessageProps {
  data: {
    text: string;
    sent?: boolean;
  };
}

const Message: FC<MessageProps> = ({ data, ...props }) => {
  return (
    <Wrapper sent={Boolean(data.sent)} {...props}>
      <MessageWrapper sent={Boolean(data.sent)}>
        {data.text}
      </MessageWrapper>
    </Wrapper>
  );
};

export default Message;
