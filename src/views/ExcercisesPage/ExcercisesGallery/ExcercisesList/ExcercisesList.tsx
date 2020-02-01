import React, { FC, useState, useEffect } from 'react';
import { List } from '@material-ui/core';
import { Input } from 'components';
import SearchIcon from '../../images/search.svg';
import FrownIcon from '../../images/frown.svg';
import { Wrapper, ListItem, EmptyListResult, Icon } from './ExcercisesList.style';

interface ExcercisesListProps {
  onClick: (id: string) => void;
  activeVideoId?: string;
  data: {
    title: string;
    url: string;
  }[];
}

const ExcercisesList: FC<ExcercisesListProps> = ({
  onClick,
  activeVideoId,
  data,
}) => {
  useEffect(() => {
    if (data.length > 0) {
      onClick(getVideoId(data[0].url));
    }
  }, []);
  const [searchBoxValue, setSearchBoxValue] = useState('');
  const onInputChange = (value: string): void => setSearchBoxValue(value.trim().toLowerCase());
  const listItems = data.filter((item) => item.title.toLowerCase().includes(searchBoxValue));
  const getVideoId = (url: string): string => url.split('watch?v=')[1];
  return (
    <Wrapper>
      <Input
        name="search"
        placeholder="Wyszukaj ćwiczenie"
        icon={SearchIcon}
        onChange={onInputChange}
      />
      <List>
        {listItems.map((item) => {
          const videoId = getVideoId(item.url);
          return (
            <ListItem
              key={item.title}
              button
              onClick={() => onClick(videoId)}
              isActive={videoId === activeVideoId}
            >
              {item.title}
            </ListItem>
            );
          }
        )}
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
