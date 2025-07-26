import { TableProps } from './types';
import styles from './Table.module.css';

export const Table = ({ children }: TableProps) => {
  return <table className={styles.table}>{children}</table>;
};
