import { Table } from '@tanstack/react-table';

export type ColumnsFilterTableProps<T extends object> = {
  children?: (table: Table<T>) => React.ReactNode;
  emptyMessage?: string;
  noResultsMessage?: string;
  loading?: boolean;
};
