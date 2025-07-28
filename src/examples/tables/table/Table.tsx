import { TableProps } from './types';
import styles from './Table.module.css';
import { classNames } from '@src/stories/helpers';

export const Table = ({ className, children }: TableProps) => {
  return (
    <table className={classNames(styles.table, className)}>{children}</table>
  );
};
