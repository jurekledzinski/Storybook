import styles from './Table.module.css';
import { classNames } from '@src/stories/helpers';
import { TableProps } from './types';

export const Table = ({ className, children }: TableProps) => {
  return <div className={classNames(styles.table, className)}>{children}</div>;
};
