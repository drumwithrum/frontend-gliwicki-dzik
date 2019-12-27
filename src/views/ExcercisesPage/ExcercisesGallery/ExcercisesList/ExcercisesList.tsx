import React, { FC, useState, useEffect } from 'react';
import { List, Typography } from '@material-ui/core';
import { Input } from 'components';
import SearchIcon from '../../images/search.svg';
import FrownIcon from '../../images/frown.svg';
import { Wrapper, ListItem, EmptyListResult, Icon } from './ExcercisesList.style';

interface ExcercisesListProps {
  onClick: (id: string) => void;
}

const data = [{
  title: 'Wyciskanie sztangi na ławce płaskiej',
  url: 'https://www.youtube.com/watch?v=bbJzacwZw9g',
}, {
  title: 'Wyciskanie żołnierskie',
  url: 'https://www.youtube.com/watch?v=x-imhzh_mMU',
}, {
  title: 'Wyciskanie skośne',
  url: 'https://www.youtube.com/watch?v=x-imhzh_mMU',
}];

const ExcercisesList: FC<ExcercisesListProps> = ({
  onClick,
}) => {
  useEffect(() => {
    if (data.length > 0) onClick(parseUrl(data[0].url));
  }, []);
  const [searchBoxValue, setSearchBoxValue] = useState('');
  const onInputChange = (value: string) => setSearchBoxValue(value.trim().toLowerCase());
  const listItems = data.filter((item) => item.title.includes(searchBoxValue));
  const parseUrl = (url: string) => url.split('watch?v=')[1];
  return (
    <Wrapper>
      <Input
        name="search"
        placeholder="Wyszukaj ćwiczenie"
        icon={SearchIcon}
        onChange={onInputChange}
      />
      <List>
        {listItems.map((item) => (
          <ListItem key={item.title} button onClick={() => onClick(parseUrl(item.url))}>
            {item.title}
          </ListItem>
        ))}
      </List>
      {(listItems.length < 1)
        ? (
          <EmptyListResult>
            Obawiam się, że nie mamy ćwiczenia, którego szukasz
            <Icon src={FrownIcon} />
          </EmptyListResult>
        ) : null
      }
    </Wrapper>
  );
};

export default ExcercisesList;
