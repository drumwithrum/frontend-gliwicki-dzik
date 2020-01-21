import React, { FC } from 'react';
import {Wrapper, Title} from './RankingTable.style';

interface RankingTable {
}

const RankingTable: FC<RankingTable> = (props: RankingTable) => {
  return (
    <Wrapper>
      <Title>
        Raking Bicepsów!
      </Title>
    </Wrapper>
  );
};

export default RankingTable;
