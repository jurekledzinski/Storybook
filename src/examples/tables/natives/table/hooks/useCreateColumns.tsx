import { createColumnHelper } from '@tanstack/react-table';
import { CreateColumnsProps } from './types';
import { useMemo } from 'react';

export const useCreateColumns = <T extends object>({
  fn,
}: CreateColumnsProps<T>) => {
  const columnHelper = createColumnHelper<T>();
  const columns = useMemo(() => fn(columnHelper), [fn, columnHelper]);
  return columns;
};
