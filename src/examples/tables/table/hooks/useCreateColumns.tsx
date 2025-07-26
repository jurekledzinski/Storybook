import { createColumnHelper } from '@tanstack/react-table';
import { useMemo } from 'react';
import { CreateColumnsProps } from './types';

// type Person = {
//   firstName: string;
//   lastName: string;
//   age: number;
//   visits: number;
//   status: string;
//   progress: string;
// };

export const useCreateColumns = <T extends object>({
  fn,
}: CreateColumnsProps<T>) => {
  const columnHelper = createColumnHelper<T>();
  const columns = useMemo(() => fn(columnHelper), [fn, columnHelper]);
  return columns;
};

// export const Example = () => {
//   const columns = useCreateColumns<Person>({
//     fn: (helpers) => [
//       helpers.accessor('firstName', {
//         header: 'First name',
//       }),
//       helpers.accessor('age', {
//         header: 'Last name',
//       }),
//     ],
//   });

//   return columns;
// };
