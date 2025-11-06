import { ContextPagination } from './context';
import { useContext } from 'react';

export const usePaginationContext = () => {
  const context = useContext(ContextPagination);

  if (!context) throw new Error('Pagination context not found');

  return context;
};
