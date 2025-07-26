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

const defaultData: Person[] = [
  {
    firstName: 'tanner',
    lastName: 'linsley',
    age: 24,
    visits: 100,
    status: 'In Relationship',
    progress: 50,
  },
  {
    firstName: 'tandy',
    lastName: 'miller',
    age: 40,
    visits: 40,
    status: 'Single',
    progress: 80,
  },
  {
    firstName: 'joe',
    lastName: 'dirte',
    age: 45,
    visits: 20,
    status: 'Complicated',
    progress: 10,
  },
];

export const ColumnsFilterTable = () => {
  const [data] = useState(() => [...defaultData]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);

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
    },
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(), //client side filtering
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    debugTable: true,
    debugHeaders: true,
    debugColumns: false,
  });

  return (
    <Table>
      <TableHeader table={table}>
        <ColumnsFilterHeader />
      </TableHeader>
      <TableBody table={table}>
        <ColumnsFilterBody />
      </TableBody>
    </Table>
  );
};
