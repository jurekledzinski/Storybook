import styles from './TableStatus.module.css';
import { Loader } from '@src/stories/feedbacks/loader';
import { TableStatusProps } from './types';

export const TableStatus = ({
  children,
  isEmpty,
  isLoading,
  noResults = true,
}: TableStatusProps) => {
  if (isLoading && isEmpty) {
    return (
      <div className={styles.relative}>
        {children}
        <Loader position="element" />
      </div>
    );
  }

  if (!isEmpty) return <div className={styles.wrapper}>No data available</div>;

  if (!noResults) {
    return <div className={styles.wrapper}>No results match your filter</div>;
  }

  return children;
};
