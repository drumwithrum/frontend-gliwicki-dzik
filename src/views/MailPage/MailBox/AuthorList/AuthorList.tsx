import React, { FC, useState } from 'react';
import { List } from '@material-ui/core';
import { Input } from 'components';
import SearchIcon from '../../images/search.svg';
import FrownIcon from '../../images/frown.svg';
import { Wrapper, ListItem, EmptyListResult, Icon } from './AuthorList.style';

interface AuthorListProps {
  onClick: (id: string | number) => void;
  activeUserId?: string;
  data?: {
    id: string | number;
    name: string;
  }[];
}

const AuthorList: FC<AuthorListProps> = ({
  onClick,
  activeUserId,
  data = [],
}) => {

  const [searchBoxValue, setSearchBoxValue] = useState('');
  const onInputChange = (value: string): void => setSearchBoxValue(value.trim().toLowerCase());
  const listItems = data.filter((item) => item.name.toLowerCase().includes(searchBoxValue));

  return (
    <Wrapper>
      <Input
        name="search"
        placeholder="Wyszukaj ziomeczka"
        icon={SearchIcon}
        onChange={onInputChange}
      />
      <List>
        {listItems.map((item) => {
          return (
            <ListItem
              key={item.id}
              button
              onClick={() => onClick(item.id)}
              isActive={`${item.id}` === `${activeUserId}`}
            >
              {item.name}
            </ListItem>
            );
          },
        )}
      </List>
      {(listItems.length < 1)
        ? (
          <EmptyListResult>
            Nikt taki do Ciebie nie pisał!
            <Icon src={FrownIcon} />
          </EmptyListResult>
        ) : null
      }
    </Wrapper>
  );
};

export default AuthorList;
