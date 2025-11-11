import styles from './TableStatus.module.css';
import { TableStatusProps } from './types';

export const TableStatus = ({ children, isEmpty, isLoading }: TableStatusProps) => {
  if (isLoading && !isEmpty) return <div className={styles.overlay}>{children}</div>;
  return null;
};
