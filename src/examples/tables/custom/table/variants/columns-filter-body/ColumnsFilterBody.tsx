import styles from '../../Table.module.css';
import { ColumnsFilterBodyProps } from './types';
import { flexRender } from '@tanstack/react-table';

export const ColumnsFilterBody = <T extends object>({
  row,
}: ColumnsFilterBodyProps<T>) => {
  return (
    <>
      {row
        ? row.getVisibleCells().map((cell) => {
            return (
              <div className={styles.td} key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </div>
            );
          })
        : null}
    </>
  );
};
