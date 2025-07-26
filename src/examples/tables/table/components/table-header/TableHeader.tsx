import { Children, cloneElement, isValidElement } from 'react';
import { HeaderGroup } from '@tanstack/react-table';
import { TableHeaderProps } from './types';

export const TableHeader = <T extends object>({
  children,
  table,
}: TableHeaderProps<T>) => {
  return (
    <thead>
      {table.getHeaderGroups().map((headerGroup) => (
        <tr key={headerGroup.id}>
          {Children.map(
            children,
            (child) =>
              isValidElement<{ headerGroup: HeaderGroup<T> }>(child) &&
              cloneElement(child, { headerGroup })
          )}
        </tr>
      ))}
    </thead>
  );
};

// export const TableHeader = <T extends object>({
//   table,
// }: TableHeaderProps<T>) => {
//   return (
//     <thead>
//       {table.getHeaderGroups().map((headerGroup) => (
//         <tr key={headerGroup.id}>
//           {headerGroup.headers.map((header) => (
//             <th key={header.id}>
//               {header.isPlaceholder
//                 ? null
//                 : flexRender(
//                     header.column.columnDef.header,
//                     header.getContext()
//                   )}
//             </th>
//           ))}
//         </tr>
//       ))}
//     </thead>
//   );
// };
