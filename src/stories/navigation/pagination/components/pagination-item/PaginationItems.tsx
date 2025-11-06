import { getPaginationProps } from '../../utils';
import { PaginationItem } from './components';
import { PaginationItemsProps } from './types';
import { usePaginationContext } from '../../store';

export const PaginationItems = ({ ...props }: PaginationItemsProps) => {
  const { currentPage, onClick, paginationItems, ...rest } = usePaginationContext();
  const { uiPaginationProps } = getPaginationProps(rest);

  return (
    <>
      {paginationItems.map((page) => (
        <PaginationItem
          {...props}
          {...uiPaginationProps}
          key={page}
          page={page}
          onClick={onClick}
          isActive={currentPage === page}
        />
      ))}
    </>
  );
};
