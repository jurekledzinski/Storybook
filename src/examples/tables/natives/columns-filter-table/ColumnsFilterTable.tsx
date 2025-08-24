import styles from './ColumnsFilterTable.module.css';
import { ColumnsFilterTableProps } from './types';
import { useState } from 'react';
import {
  ColumnsFilterBody,
  ColumnsFilterHeader,
  Table,
  TableBody,
  TableHeader,
  TableState,
  useCreateColumns,
} from '../table';
import {
  ColumnFiltersState,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  PaginationState,
  useReactTable,
} from '@tanstack/react-table';

type Person = {
  firstName: string;
  lastName: string;
  age: number;
  visits: number;
  status: string;
  progress: number;
};

const defaultData = Array.from<Person>({ length: 50 }).map((_, index) => ({
  firstName: `Bob Hello hello hello hello hello hello-${index}`,
  lastName: `Lee-${index}`,
  age: 24 + index,
  visits: 10 + index,
  status: 'In Relationship',
  progress: 3 + index,
}));

export const ColumnsFilterTable = ({
  children,
  emptyMessage = 'No data available',
  noResultsMessage = 'No results match your filter',
}: ColumnsFilterTableProps<Person>) => {
  const [data] = useState(() => [...defaultData]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 5,
  });

  const columns = useCreateColumns<Person>({
    fn: ({ accessor }) => [
      accessor('firstName', {
        header: () => 'First Name',
      }),
      accessor('lastName', {
        header: () => 'Last Name',
      }),
      accessor((row) => `${row.firstName} ${row.lastName}`, {
        id: 'fullName',
        header: () => 'Full Name',
      }),
      accessor('age', {
        header: 'Age',
        meta: {
          filterVariant: 'range',
        },
      }),
      accessor('visits', {
        header: () => 'Visits',
        meta: {
          filterVariant: 'range',
        },
      }),
      accessor('status', {
        header: 'Status',
        meta: {
          filterVariant: 'select',
        },
      }),
      accessor('progress', {
        header: 'Profile Progress',
        meta: {
          filterVariant: 'range',
        },
      }),
    ],
  });

  const table = useReactTable({
    data,
    columns,
    filterFns: {},
    state: {
      columnFilters,
      pagination,
    },
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onPaginationChange: setPagination,
    debugTable: true,
    debugHeaders: true,
    debugColumns: false,
  });

  const isEmpty = Boolean(table.options.data.length);
  const noResults = Boolean(table.getPrePaginationRowModel().rows.length);

  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapperTable}>
        <div className={styles.wrapperContent}>
          <Table>
            <TableHeader table={table}>
              <ColumnsFilterHeader />
            </TableHeader>

            <TableBody table={table}>
              <ColumnsFilterBody />
            </TableBody>
          </Table>

          {!isEmpty && <TableState>{emptyMessage}</TableState>}
          {!noResults && isEmpty && <TableState>{noResultsMessage}</TableState>}
        </div>
      </div>
      <div className={styles.wrapperPagination}>
        {children ? children(table) : null}
      </div>
    </div>
  );
};
