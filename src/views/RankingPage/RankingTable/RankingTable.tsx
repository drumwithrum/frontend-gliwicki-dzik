import React, {FC, useEffect, useReducer} from 'react';
import {Title, Body} from './RankingTable.style';
import StaticTable from 'components/StaticTable';

interface RankingTableProps {
  rows: any;
  headers: any;
}

const RankingTable: FC<RankingTableProps> = ({rows, headers}: RankingTableProps) => {
  return (
    <>
      <Title>
        Raking Bicepsów!
      </Title>
      <Body>
        <StaticTable rows={rows} headers={headers} />
      </Body>
    </>
  );
};

export default RankingTable;
