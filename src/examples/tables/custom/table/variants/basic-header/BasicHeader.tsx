import styles from '../../Table.module.css';
import { BasicHeaderProps } from './types';
import { flexRender } from '@tanstack/react-table';

export const BasicHeader = <T extends object>({
  headerGroup,
}: BasicHeaderProps<T>) => {
  return (
    <>
      {headerGroup
        ? headerGroup.headers.map((header) => (
            <div className={styles.th} key={header.id}>
              {header.isPlaceholder
                ? null
                : flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
            </div>
          ))
        : null}
    </>
  );
};
