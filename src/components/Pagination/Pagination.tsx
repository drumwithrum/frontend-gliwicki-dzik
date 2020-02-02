import React from 'react';

import {Wrapper, Label, Page} from './Pagination.styles';

interface PaginationProps {
  disableNext: boolean;
  paginationPage: number;
  onPageChange(direction: number): void;
}

const Pagination: React.FC<PaginationProps> = (props: PaginationProps) => {
  const {disableNext, paginationPage, onPageChange} = props;

  const onLabelClick = (direction: number): void => {
    onPageChange(paginationPage + direction);
  };

  return (
    <Wrapper>
      <Label
        onClick={paginationPage > 1 ? (): void => onLabelClick(-1) : undefined}
        disabled={paginationPage === 1}
        prev
      >
        -
      </Label>
      <Page>
        {paginationPage}
      </Page>
      <Label
        onClick={disableNext ? undefined : (): void => onLabelClick(1)}
        prev={false}
        disabled={disableNext}
      >
        +
      </Label>
    </Wrapper>
  );
};

export default Pagination;
