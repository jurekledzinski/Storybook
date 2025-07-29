import styles from '../../Table.module.css';
import { Children, cloneElement, isValidElement } from 'react';
import { Row } from '@tanstack/react-table';
import { TableBodyProps } from './types';

export const TableBody = <T extends object>({
  children,
  table,
}: TableBodyProps<T>) => {
  return (
    <div className={styles.tbody}>
      {table.getRowModel().rows.map((row) => (
        <div className={styles.tr} key={row.id}>
          {Children.map(
            children,
            (child) =>
              isValidElement<{ row: Row<T> }>(child) &&
              cloneElement(child, { row })
          )}
        </div>
      ))}
    </div>
  );
};

// {
//   isLoading && isEmpty && ElementLoading && (
//     <ElementLoading className={stylesStatus.overlay}>
//       <Loader position="element" />
//     </ElementLoading>
//   );
// }

// export const TableBody = <T extends object>({
//   children,
//   table,
//   isEmpty,
//   isLoading,
//   elementLoading: ElementLoading,
// }: TableBodyProps<T>) => {
//   return (
//     <div className={styles.tbody}>
//       {table.getRowModel().rows.map((row) => (
//         <div className={styles.tr} key={row.id}>
//           {Children.map(
//             children,
//             (child) =>
//               isValidElement<{ row: Row<T> }>(child) &&
//               cloneElement(child, { row })
//           )}
//         </div>
//       ))}
//     </div>
//   );
// };
