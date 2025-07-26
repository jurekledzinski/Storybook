import { useState } from 'react';
import {
  BasicBody,
  BasicHeader,
  Table,
  TableBody,
  TableHeader,
  useCreateColumns,
} from '../table';
import { getCoreRowModel, useReactTable } from '@tanstack/react-table';

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

export const SimpleTable = () => {
  const [data] = useState(() => [...defaultData]);

  const columns = useCreateColumns<Person>({
    fn: ({ accessor }) => [
      accessor('firstName', {
        cell: (info) => info.getValue(),
      }),
      accessor((row) => row.lastName, {
        id: 'lastName',
        cell: (info) => <i>{info.getValue()}</i>,
        header: () => <span>Last Name</span>,
      }),
      accessor('age', {
        header: () => 'Age',
        cell: (info) => info.renderValue(),
      }),
      accessor('visits', {
        header: () => <span>Visits</span>,
      }),
      accessor('status', {
        header: 'Status',
      }),
      accessor('progress', {
        header: 'Profile Progress',
      }),
    ],
  });

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <Table>
      <TableHeader table={table}>
        <BasicHeader />
      </TableHeader>
      <TableBody table={table}>
        <BasicBody />
      </TableBody>
    </Table>
  );
};
