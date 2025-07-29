import styles from '../../Table.module.css';
import { Children, cloneElement, isValidElement } from 'react';
import { HeaderGroup } from '@tanstack/react-table';
import { TableHeaderProps } from './types';

export const TableHeader = <T extends object>({
  children,
  table,
}: TableHeaderProps<T>) => {
  return (
    <div className={styles.thead}>
      {table.getHeaderGroups().map((headerGroup) => (
        <div className={styles.tr} key={headerGroup.id}>
          {Children.map(
            children,
            (child) =>
              isValidElement<{ headerGroup: HeaderGroup<T> }>(child) &&
              cloneElement(child, { headerGroup })
          )}
        </div>
      ))}
    </div>
  );
};
