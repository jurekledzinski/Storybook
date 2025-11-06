import { PaginationProps } from '../types';

type CustomPaginationProps = Omit<PaginationProps, 'children'>;

export const getPaginationProps = (props: CustomPaginationProps) => {
  const { onChangePage, totalPages, maxRange, perPage, ...rest } = props;

  const uxPaginationProps = { onChangePage, totalPages, maxRange, perPage };
  const uiPaginationProps = rest;

  return { uiPaginationProps, uxPaginationProps };
};
