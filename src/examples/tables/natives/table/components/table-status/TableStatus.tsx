import styles from './TableStatus.module.css';
import { Loader } from '@src/stories/feedbacks/loader';
import { TableStatusProps } from './types';

export const TableStatus = ({ isEmpty, isLoading }: TableStatusProps) => {
  if (isLoading && isEmpty) {
    return (
      <td className={styles.overlay} colSpan={2}>
        <Loader position="element" />
      </td>
    );
  }

  return null;
};
