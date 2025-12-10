import styles from './TabsList.module.css';
import { TabsListProps } from './types';

export const TabsList = ({ children, ...props }: TabsListProps) => {
  return (
    <div {...props} className={styles.tabList} role="tablist">
      {children}
    </div>
  );
};
