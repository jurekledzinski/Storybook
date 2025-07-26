import styles from '../../Table.module.css';
import { Children, cloneElement, isValidElement } from 'react';
import { Row } from '@tanstack/react-table';
import { TableBodyProps } from './types';

export const TableBody = <T extends object>({
  children,
  table,
}: TableBodyProps<T>) => {
  return (
    <tbody className={styles.tbody}>
      {table.getRowModel().rows.map((row) => (
        <tr key={row.id}>
          {Children.map(
            children,
            (child) =>
              isValidElement<{ row: Row<T> }>(child) &&
              cloneElement(child, { row })
          )}
        </tr>
      ))}
    </tbody>
  );
};

// export const TableBody = <T extends object>({
//   children,
//   table,
// }: TableBodyProps<T>) => {
//   return (
//     <tbody>
//       {table.getRowModel().rows.map((row) => (
//         <tr key={row.id}>
//           {row.getVisibleCells().map((cell) => (
//             <td key={cell.id}>
//               {flexRender(cell.column.columnDef.cell, cell.getContext())}
//             </td>
//           ))}
//         </tr>
//       ))}
//     </tbody>
//   );
// };
