import React, {FC} from 'react';
import {Body} from './RankingTable.style';
import StaticTable from 'components/StaticTable';

interface RankingTableProps {
  rows: any;
  headers: any;
}

const RankingTable: FC<RankingTableProps> = ({rows, headers}: RankingTableProps) => {
  return (
    <>
      <Body>
        <StaticTable rows={rows} headers={headers} />
      </Body>
    </>
  );
};

export default RankingTable;
