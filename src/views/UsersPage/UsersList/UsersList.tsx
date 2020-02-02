import React, {FC, useState} from 'react';
import {RouteComponentProps, withRouter} from 'react-router';
import {InputWrapper} from './UserList.styles';
import SearchIcon from 'views/ExcercisesPage/images/search.svg';
import {Input} from 'components/index';
import StaticTable from 'components/StaticTable';
import Button from 'components/Button';
import {SingleUser} from 'types/store/SingleUserStore';

const headers = ['NO', 'Imie', 'Płeć', 'Wiek', 'Waga', 'Rozmiar bicepsa', 'Profil'];

interface OwnProps {
  users: SingleUser[];
  pageNumber: number;
}

type UsersListProps = OwnProps & RouteComponentProps;

const UserList: FC<UsersListProps> = (props: UsersListProps) => {
  const {users, pageNumber} = props;
  const [searchInputValue, setSearchInputValue] = useState('');
  const dataItems = users.filter((item) => item.username.toLowerCase().includes(searchInputValue));
  const onInputChange = (value: string): void => setSearchInputValue(value.trim().toLowerCase());
  const getRows = () => dataItems.map((elem, index) => ({
    id: (pageNumber - 1) * 10 + index + 1,
    name: elem.username,
    gender: elem.gender,
    age: elem.age,
    weight: elem.weight,
    bicepsSize: elem.bicepsSize,
    action: (
      <Button onClick={() => props.history.push(`/users/user/${elem.userId}`)}>
        Profil
      </Button>
    ),
  }));

  return (
    <>
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
    </>
  );
};

export default withRouter(UserList);
