import { useState } from 'react';
import { ActionType, UsePaginationProps } from './types';

export const usePagination = ({
  perPage = [10],
  maxRange = 10,
  totalPages,
  onChangePage,
}: UsePaginationProps) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(perPage[0]);
  const amountButtons = Math.ceil(totalPages / itemsPerPage);

  const startValue = Math.floor(currentPage / maxRange) * maxRange;
  const endValue = Math.min(maxRange + startValue, amountButtons);

  const setPage = (page: number) => setCurrentPage(page);

  const onClick = (actionType: ActionType, value?: number) => {
    const page = currentPage;
    const firstPage = 0;
    const lastPage = amountButtons - 1;
    const nextPage = page + 1 < amountButtons ? page + 1 : amountButtons - 1;
    const prevPage = Math.max(0, page - 1);

    switch (actionType) {
      case 'first':
        setPage(firstPage);
        onChangePage(firstPage + 1, itemsPerPage);
        break;
      case 'last':
        setPage(lastPage);
        onChangePage(lastPage + 1, itemsPerPage);
        break;
      case 'next':
        setPage(nextPage);
        onChangePage(nextPage + 1, itemsPerPage);
        break;
      case 'prev':
        setPage(prevPage);
        onChangePage(prevPage + 1, itemsPerPage);
        break;
      case 'page':
        setPage(value!);
        onChangePage(page, itemsPerPage);
    }
  };

  const paginationItems = Array.from(
    { length: endValue - startValue },
    (_, i) => i + startValue
  );

  return { onClick, paginationItems };
};
