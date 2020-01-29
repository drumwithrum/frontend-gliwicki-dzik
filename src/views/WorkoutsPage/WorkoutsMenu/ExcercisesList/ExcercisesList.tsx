import React, { FC, useState } from 'react';
import { List } from '@material-ui/core';
import { Input } from 'components';
import SearchIcon from '../../images/search.svg';
import FrownIcon from '../../images/frown.svg';
import { Wrapper, ListItem, EmptyListResult, Icon, AddIcon } from './ExcercisesList.style';

interface ExcercisesListProps {
  onClick?: (id: string) => void;
  onDelete?: (index: number) => void;
  disableSearch?: boolean;
  searchPlaceholder?: string;
  isAddingTraining?: boolean;
  onNewAdd?: () => void;
  data: {
    title: string;
    id: string;
  }[];
}

const ExcercisesList: FC<ExcercisesListProps> = ({
  onClick,
  disableSearch = false,
  isAddingTraining = false,
  searchPlaceholder = '',
  data = [],
  onNewAdd,
}) => {
  const [searchBoxValue, setSearchBoxValue] = useState('');
  const onInputChange = (value: string) => setSearchBoxValue(value.trim().toLowerCase());
  const listItems = data.filter((item) => item.title.toLowerCase().includes(searchBoxValue));

  const handleClick = (id: string) => {
    if (!Boolean(onClick)) {
      return;
    };
    onClick!(id);
  };

  return (
    <Wrapper>
      {!disableSearch
        ? (
          <Input
            name="search"
            placeholder={searchPlaceholder || 'Wyszukaj ćwiczenie'}
            icon={SearchIcon}
            onChange={onInputChange}
          />
        ) : null}
      <List>
        {onNewAdd && (
          <ListItem
            button
            onClick={onNewAdd}
          >
            <AddIcon>+</AddIcon>Dodaj trening
          </ListItem>
        )}
        {listItems.map((item) => {
          return (
            <ListItem
              key={item.title}
              button
              onClick={() => handleClick(item.id)}
            >
              {item.title}
            </ListItem>
            );
          },
        )}
      </List>
      {(listItems.length < 1)
        ? (
          <EmptyListResult>
            {isAddingTraining ? 'Kliknij w ćwiczenie aby dodać je do treningu' : 'Nie masz takiego treningu'}
            {!isAddingTraining && <Icon src={FrownIcon} />}
          </EmptyListResult>
        ) : null
      }
    </Wrapper>
  );
};

export default ExcercisesList;
