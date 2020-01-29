import React, { FC, useState } from 'react';
import { Wrapper } from './MessagesList.style';
import Message from './Message';

interface MessagesListProps {
  messages: {
    text: string;
    sent?: boolean;
  }[];
}

const MessagesList: FC<MessagesListProps> = ({ messages }) => {
  return (
    <Wrapper>
      {messages.map((message, index) => <Message key={`message-${index}`} data={message} />)}
    </Wrapper>
  );
};

export default MessagesList;
