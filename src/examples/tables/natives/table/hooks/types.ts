import { ColumnDef, ColumnHelper } from '@tanstack/react-table';

export type CreateColumnsProps<T> = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  fn: (helper: ColumnHelper<T>) => ColumnDef<T, any>[];
};
