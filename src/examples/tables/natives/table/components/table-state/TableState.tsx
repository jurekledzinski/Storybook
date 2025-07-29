import { classNames } from '@src/stories/helpers';
import styles from './TableState.module.css';
import { TableStateProps } from './types';

export const TableState = ({
  className,
  children,
  ...props
}: TableStateProps) => {
  return (
    <div {...props} className={classNames(styles.wrapper, className ?? '')}>
      {children}
    </div>
  );
};
