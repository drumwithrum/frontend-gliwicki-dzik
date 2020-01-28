import React, { FC, useState } from 'react';
import { Wrapper, ListWrapper, PlayerWrapper } from './MailBox.style';
import AuthorList from './AuthorList';

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

const MailBox: FC = (props: MailBoxProps) => {
  const [userId, setUserId] = useState<string>('');
  return (
    <Wrapper>
      <ListWrapper>
        <AuthorList onClick={setUserId} activeUserId={userId} data={data} />
      </ListWrapper>

    </Wrapper>
  );
};

export default MailBox;
