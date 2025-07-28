import styles from './TableState.module.css';
import { TableStateProps } from './types';

export const TableState = ({ children, ...props }: TableStateProps) => {
  //   const stateMessage = {
  //     error: 'Something went wrong.',
  //     empty: 'No data available.',
  //     noResults: 'No results match your filter.',
  //   };

  return (
    <div {...props} className={styles.wrapper}>
      {children}
    </div>
  );
};
