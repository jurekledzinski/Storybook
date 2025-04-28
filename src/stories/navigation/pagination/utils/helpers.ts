import { PaginationContextValue } from '../context';
import { PaginationProps } from '../types';

type CustomPaginationProps = Omit<PaginationProps, 'children'>;

type CustomPropsItems = Omit<
  PaginationContextValue,
  'currentPage' | 'onClick' | 'paginationItems'
>;

export const getPaginationProps = (props: CustomPaginationProps) => {
  const { onChangePage, totalPages, maxRange, perPage, ...rest } = props;

  const uxPaginationProps = { onChangePage, totalPages, maxRange, perPage };
  const uiPaginationProps = rest;

  return { uiPaginationProps, uxPaginationProps };
};

export const getPaginationItemsProps = (props: CustomPropsItems) => {
  const { border, color, radius, size, spacing, variant } = props;
  return { border, color, radius, size, spacing, variant };
};
