import React, { FC, useState } from 'react';
import { Wrapper, ListWrapper, MessagesWrapper, RightSegment, MessageBoxWrapper } from './MailBox.style';
import AuthorList from './AuthorList';
import MessagesList from './MessagesList';
import MessageBox from './MessageBox';

interface MailBoxProps {
}

const data = [{
  id: '123',
  name: 'Arnold',
}, {
  id: '88',
  name: 'Bochcio88',
}, {
  id: '71zrobsalut',
  name: 'benek',
}];

const messages = [{
  text: 'Eluwina',
  sent: false,
}, {
  text: 'no siema byku',
  sent: true,
}];

const MailBox: FC = (props: MailBoxProps) => {
  const [userId, setUserId] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const handleAuthorClick = (id: string) => {
    if (userId !== id) {
      setMessage('');
    }
    setUserId(id);
  };
  return (
    <Wrapper>
      <ListWrapper>
        <AuthorList onClick={handleAuthorClick} activeUserId={userId} data={data} />
      </ListWrapper>
      <RightSegment>
        <MessagesWrapper>
          <MessagesList messages={messages} />
        </MessagesWrapper>
        <MessageBox />
      </RightSegment>
    </Wrapper>
  );
};

export default MailBox;
