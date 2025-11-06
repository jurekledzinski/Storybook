import PaginationProvider from './store';
import { getPaginationProps, paginationClassNames } from './utils';
import { PaginationProps } from './types';
import { usePagination } from './hooks';

export const Pagination = ({ children, ...props }: PaginationProps) => {
  const { uiPaginationProps, uxPaginationProps } = getPaginationProps(props);

  const paginationControl = usePagination(uxPaginationProps);

  const classNames = paginationClassNames({ spacing: props.spacing });

  return (
    <PaginationProvider
      value={{
        ...paginationControl,
        ...uiPaginationProps,
        totalPages: props.totalPages,
      }}
    >
      <div className={classNames}>{children}</div>
    </PaginationProvider>
  );
};
