import styles from '../../Table.module.css';
import { BasicBodyProps } from './types';
import { flexRender } from '@tanstack/react-table';

export const BasicBody = <T extends object>({ row }: BasicBodyProps<T>) => {
  return (
    <>
      {row
        ? row.getVisibleCells().map((cell) => (
            <div className={styles.td} key={cell.id}>
              {flexRender(cell.column.columnDef.cell, cell.getContext())}
            </div>
          ))
        : null}
    </>
  );
};
