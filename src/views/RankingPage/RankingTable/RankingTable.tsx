import React, { FC } from 'react';
import {Wrapper, Title, Body} from './RankingTable.style';
import StaticTable from 'components/StaticTable';

const headers: string[] = [
  'No',
  'Imie',
  'Waga',
  'Wielkosc Bicepsa !!',
];

const rows = [
  {
    id: '1',
    name: 'X',
    weight: '',
    bicepsSize: 20,
  },
  {
    id: '2',
    name: 'Y',
    weight: '',
    bicepsSize: 10,
  },
  {
    id: '3',
    name: 'Z',
    weight: '',
    bicepsSize: 5,
  },
];

interface RankingTable {
}

const RankingTable: FC<RankingTable> = (props: RankingTable) => {
  return (
    <Wrapper>
      <Title>
        Raking Bicepsów!
      </Title>
      <Body>
        <StaticTable rows={rows} headers={headers} />
      </Body>
    </Wrapper>
  );
};

export default RankingTable;
