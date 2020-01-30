import React, {FC, useEffect, useState} from 'react';
import {Wrapper, InputWrapper, Title} from './UserList.styles';
import {getUsers} from 'store/users/actions';
import SearchIcon from 'views/ExcercisesPage/images/search.svg';
import {Input} from 'components/index';
import StaticTable from 'components/StaticTable';
import Button from 'components/Button';

const users = [
  {
    name: 'fafa',
    lastName: 'cos',
    id: 'fafffgfdsgwt2',
  },
  {
    name: 'fafafaf',
    lastName: 'fafa',
    id: 'asdr32t',
  },
];

const headers = ['ID', 'imie', 'nazwisko', 'profil'];

const UserList: FC<any> = (props: any) => {
  const [searchInputValue, setSearchInputValue] = useState('');
  const dataItems = users.filter((item) => item.name.toLowerCase().includes(searchInputValue));
  const onInputChange = (value: string): void => setSearchInputValue(value.trim().toLowerCase());
  const getRows = () => dataItems.map((elem, index) => ({
    id: index + 1,
    name: elem.name,
    lastName: elem.lastName,
    action: (
        <Button onClick={() => props.history.push('/users/user/:id')}>
          Zobacz Profil
        </Button>
    ),
  }));
  useEffect(() => {
    getUsers();
  }, []);
  return (
    <Wrapper>
      <Title>
        Sprawdz jakiegos dzika !
      </Title>
      <InputWrapper>
        <Input
          name="search"
          placeholder="Wyszukaj dzika"
          icon={SearchIcon}
          onChange={onInputChange}
        />
      </InputWrapper>
     <div>
       <StaticTable rows={getRows()} headers={headers} />
     </div>
    </Wrapper>
  );
};

export default UserList;
