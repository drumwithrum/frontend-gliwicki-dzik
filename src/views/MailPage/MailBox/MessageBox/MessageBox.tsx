import React, { FC, useState } from 'react';
import { Wrapper, MessageTextArea, Icon, IconWrapper } from './MessageBox.style';
import SendIcon from './images/send.svg';

interface MessageBoxProps {
  onChange: (value: string) => void;
  onSubmit: () => void;
  value?: string;
}

const MessageBox: FC<MessageBoxProps> = ({ onChange, onSubmit, value, ...props }) => {
  const [message, setMessage] = useState('');
  const handleChange = (e: any) => {
    const value = e.target.value;
    setMessage(value);
    onChange(value);
  };
  return (
    <Wrapper {...props}>
      <MessageTextArea
        placeholder="Wpisz wiadomość..."
        onChange={handleChange}
        value={value !== undefined ? value : message}
      />
      <IconWrapper>
        <Icon alt="send" src={SendIcon} onClick={onSubmit} />
      </IconWrapper>
    </Wrapper>
  );
};

export default MessageBox;
