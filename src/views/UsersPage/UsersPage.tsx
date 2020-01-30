import React, {FC} from 'react';
import {Layout, Wrapper, Content} from './Users.styles';
import UserList from './UsersList/UsersList';

interface UsersPageProps {
  history: object;
}

const UsersPage: FC<UsersPageProps> = (props: UsersPageProps) => {
  return(
    <Wrapper>
      <Layout/>
      <Content>
        <UserList history={props.history}/>
      </Content>
    </Wrapper>
  );
};

export default UsersPage;
