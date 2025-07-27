import { useState } from 'react';
import {
  ColumnsFilterBody,
  ColumnsFilterHeader,
  Table,
  TableBody,
  TableHeader,
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
import { ColumnsFilterTableProps } from './types';

type Person = {
  firstName: string;
  lastName: string;
  age: number;
  visits: number;
  status: string;
  progress: number;
};

const defaultData = Array.from<Person>({ length: 50 }).map((_, index) => ({
  firstName: `Bob-${index}`,
  lastName: `Lee-${index}`,
  age: 24 + index,
  visits: 10 + index,
  status: 'In Relationship',
  progress: 3 + index,
}));

export const ColumnsFilterTable = ({
  children,
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

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
      <div style={{ overflow: 'auto' }}>
        <Table>
          <TableHeader table={table}>
            <ColumnsFilterHeader />
          </TableHeader>
          <TableBody table={table}>
            <ColumnsFilterBody />
          </TableBody>
        </Table>
      </div>
      <div style={{ alignSelf: 'flex-end' }}>
        {children ? children(table) : null}
      </div>
    </div>
  );
};
