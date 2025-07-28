import styles from './SimpleTable.module.css';
import { getCoreRowModel, useReactTable } from '@tanstack/react-table';
import { SimpleTableProps } from './types';
import { useState } from 'react';
import {
  BasicBody,
  BasicHeader,
  Table,
  TableBody,
  TableHeader,
  TableState,
  useCreateColumns,
} from '../table';
import { Loader } from '@src/stories/feedbacks/loader';

type Person = {
  firstName: string;
  lastName: string;
  age: number;
  visits: number;
  status: string;
  progress: number;
};

const defaultData = Array.from<Person>({ length: 5 }).map((_, index) => ({
  firstName: `Bob-${index}`,
  lastName: `Lee-${index}`,
  age: 24 + index,
  visits: 10 + index,
  status: 'In Relationship',
  progress: 3 + index,
}));

export const SimpleTable = ({
  elementEmpty: ElementEmpty = TableState,
  elementLoading: ElementLoading = TableState,
  elementNoResults: ElementNoResults = TableState,
  isLoading = true,
}: SimpleTableProps) => {
  const [data] = useState(() => [...defaultData]);

  const columns = useCreateColumns<Person>({
    fn: ({ accessor }) => [
      accessor('firstName', {
        cell: (info) => info.getValue(),
        header: () => <span>First Name</span>,
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

  const isEmpty = Boolean(table.options.data.length);

  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapperTable}>
        <div className={styles.wrapperContent}>
          <Table>
            <TableHeader table={table}>
              <BasicHeader />
            </TableHeader>
            <TableBody table={table}>
              <BasicBody />
            </TableBody>
          </Table>

          {!isEmpty && <ElementEmpty>No data available</ElementEmpty>}
        </div>
      </div>
    </div>
  );
};

//   isLoading && isEmpty && (
//     <ElementLoading className={styles.overlay}>
//       <Loader position="element" />
//     </ElementLoading>
//   );
