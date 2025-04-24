import { ActionType, UsePaginationProps } from './types';
import { useState } from 'react';

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

  const onSetPage = (page: number) => setCurrentPage(page);
  const onSetPerPage = (value: number) => setItemsPerPage(value);

  const onClick = (actionType: ActionType, value?: number) => {
    const page = currentPage;
    const firstPage = 0;
    const lastPage = amountButtons - 1;
    const nextPage = page + 1 < amountButtons ? page + 1 : amountButtons - 1;
    const prevPage = Math.max(0, page - 1);

    switch (actionType) {
      case 'first':
        onSetPage(firstPage);
        onChangePage(firstPage + 1, itemsPerPage);
        break;
      case 'last':
        onSetPage(lastPage);
        onChangePage(lastPage + 1, itemsPerPage);
        break;
      case 'next':
        onSetPage(nextPage);
        onChangePage(nextPage + 1, itemsPerPage);
        break;
      case 'prev':
        onSetPage(prevPage);
        onChangePage(prevPage + 1, itemsPerPage);
        break;
      case 'page':
        onSetPage(value!);
        onChangePage(value! + 1, itemsPerPage);
    }
  };

  const paginationItems = Array.from(
    { length: endValue - startValue },
    (_, i) => i + startValue
  );

  return { currentPage, onClick, onSetPerPage, paginationItems };
};
