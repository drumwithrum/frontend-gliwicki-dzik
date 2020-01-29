import React, {FC, useEffect, useState} from 'react';
import {getUsers} from 'store/users/actions';
import SearchIcon from 'views/ExcercisesPage/images/search.svg';
import {Input} from 'components/index';
import StaticTable from 'components/StaticTable';

const users = [
  {
    name: 'fafa',
    lastName: 'cos',
  },
  {
    name: 'fafafaf',
    lastName: 'fafa',
  },
];

const headers = ['ID', 'imie', 'nazwisko'];

const UserList: FC<{}> = () => {
  const [searchInputValue, setSearchInputValue] = useState('');
  const dataItems = users.filter((item) => item.name.toLowerCase().includes(searchInputValue));
  const onInputChange = (value: string): void => setSearchInputValue(value.trim().toLowerCase());
  const getRows = () => dataItems.map((elem, index) => ({
    id: index + 1,
    name: elem.name,
    lastName: elem.lastName,
  }));
  useEffect(() => {
    getUsers();
  }, []);
  return (
    <div>
      <div>
        <Input
          name="search"
          placeholder="Wyszukaj dzika"
          icon={SearchIcon}
          onChange={onInputChange}
        />
      </div>
     <div>
       <StaticTable rows={getRows()} headers={headers} />
     </div>
    </div>
  );
};

export default UserList;
