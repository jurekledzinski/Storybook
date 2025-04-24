import { PaginationArrow, PaginationItem } from './components';
import { PaginationProps } from './types';
import { useState } from 'react';
import { faAnglesRight, faAnglesLeft } from '@fortawesome/free-solid-svg-icons';
import { usePagination } from './hooks';

export const Pagination = ({
  maxRange = 10,
  perPage = [10],
  totalPages,
  onChangePage,
  ...props
}: PaginationProps) => {
  const { onClick, paginationItems } = usePagination({
    onChangePage,
    totalPages,
    maxRange,
    perPage,
  });
  //   const [currentPage, setCurrentPage] = useState(0);
  //   const [itemsPerPage, setItemsPerPage] = useState(perPage[0]);
  //   const amountButtons = Math.ceil(totalPages / itemsPerPage);

  //   const onChangePage = (page: number) => setCurrentPage(page);

  //   const onClick = (type: 'first' | 'last' | 'next' | 'prev' | 'page') => {
  //     const value = currentPage;
  //     switch (type) {
  //       case 'first':
  //         return onChangePage(0);
  //       case 'last':
  //         return onChangePage(amountButtons - 1);
  //       case 'next':
  //         return onChangePage(
  //           value + 1 < amountButtons ? value + 1 : amountButtons - 1
  //         );
  //       case 'prev':
  //         return onChangePage(Math.max(0, value - 1));
  //       case 'page':
  //         return '';
  //     }
  //   };

  //   const start = currentPage * itemsPerPage + 1;
  //   const end = Math.min((currentPage + 1) * itemsPerPage, totalPages);
  //   console.log('start mobile', start, '-', end, 'of', totalPages);

  //   const startValue = Math.floor(currentPage / maxRange) * maxRange;
  //   const endValue = Math.min(maxRange + startValue, amountButtons);

  //   const range = Array.from(
  //     { length: endValue - startValue },
  //     (_, i) => i + startValue
  //   );

  return (
    <div style={{ display: 'flex', gap: '0.5rem' }}>
      <PaginationArrow
        label={faAnglesLeft}
        onClick={() => onClick('first')}
        {...props}
      />
      <PaginationArrow label={'Prev'} onClick={() => onClick('prev')} />

      {paginationItems.map((item) => {
        return (
          <PaginationItem
            key={item}
            isActive={item === currentPage}
            page={item + 1}
            // onClick={() => setCurrentPage(item)}
            onClick={() => setCurrentPage(item)}
          />
        );
      })}

      <PaginationArrow
        label="Next"
        onClick={() => onClick('next')}
        {...props}
      />
      <PaginationArrow
        label={faAnglesRight}
        onClick={() => onClick('last')}
        {...props}
      />
    </div>
  );
};
