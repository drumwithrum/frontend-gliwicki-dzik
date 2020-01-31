import React, { FC, useState, useEffect } from 'react';
import { Wrapper, ListWrapper, MessagesWrapper, RightSegment } from './MailBox.style';
import State from 'types/store';
import { connect } from 'react-redux';
import { fetchThread, addMessage, fetchContactedUsers } from 'store/messages/actions';
import { getMessages, getContactedUsers } from 'store/messages/selectors';
import { Message } from 'types/Api/messages';
import Auth from 'utils/auth';
import AuthorList from './AuthorList';
import MessagesList from './MessagesList';
import MessageBox from './MessageBox';

interface MailBoxProps {
  fetchThread: typeof fetchThread;
  addMessage: typeof addMessage;
  fetchContactedUsers: typeof fetchContactedUsers;
  contactedUsers: {
    id: string | number;
    name: string;
  }[];
  messages: {
    text: string;
    sent: boolean;
  }[];
}

const users = [{
  id: '1',
  name: 'test2',
}];

const MailBox: FC<MailBoxProps> = ({
  fetchThread,
  addMessage,
  fetchContactedUsers,
  contactedUsers = [],
  messages = [],
}) => {
  useEffect(() => {
    fetchContactedUsers();
  }, []);
  const [userId, setUserId] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [initialized, setInitialized] = useState<boolean>(false);
  const initialize = () => {
    const id = `${contactedUsers[0].id}`;
    setUserId(id);
    fetchThread(id);
    setInitialized(true);
  };
  if (contactedUsers.length > 0 && !initialized) {
    initialize();
  }
  const handleAuthorClick = (id: string | number) => {
    if (userId !== id) {
      setMessage('');
      setUserId(`${id}`);
      fetchThread(`${id}`);
    }
  };
  const sendMessage = async () => {
    const data: Message = {
      senderId: Auth.userId!,
      recipientId: userId,
      content: message,
    };
    await addMessage(data);
    await fetchThread(userId);
    setMessage('');
  };

  return (
    <Wrapper>
      <ListWrapper>
        <AuthorList onClick={handleAuthorClick} activeUserId={userId} data={contactedUsers} />
      </ListWrapper>
      <RightSegment>
        <MessagesWrapper>
          <MessagesList messages={messages} />
        </MessagesWrapper>
        <MessageBox onSubmit={sendMessage} onChange={setMessage} value={message} />
      </RightSegment>
    </Wrapper>
  );
};

const mapStateToProps = (state: State) => ({
  messages: getMessages(state),
  contactedUsers: getContactedUsers(state),
});

const mapDispatchToProps = {
  fetchThread,
  addMessage,
  fetchContactedUsers,
};

export default connect(mapStateToProps, mapDispatchToProps)(MailBox);
