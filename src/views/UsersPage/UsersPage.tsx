import React, {FC} from 'react';
import {Layout} from './Users.styles';
import UserList from './UsersList/UsersList';

interface UsersPageProps {
}

const UsersPage: FC = (props: UsersPageProps) => {
  return <Layout>
    <UserList />
  </Layout>
};

export default UsersPage;
