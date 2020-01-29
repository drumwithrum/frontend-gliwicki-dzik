import React, { FC, useState } from 'react';
import { Wrapper, MessageTextArea, Icon, IconWrapper } from './MessageBox.style';
import SendIcon from './images/send.svg';

interface MessageBoxProps {
  onChange?: () => void;
}

const MessageBox: FC<MessageBoxProps> = ({ onChange, ...props }) => {
  const [message, setMessage] = useState('');
  const handleChange = (e: any) => setMessage(e.target.value);
  return (
    <Wrapper {...props}>
      <MessageTextArea placeholder="Wpisz wiadomość..." onChange={handleChange} value={message} />
      <IconWrapper>
        <Icon alt="send" src={SendIcon} />
      </IconWrapper>
    </Wrapper>
  );
};

export default MessageBox;
