import styles from './AppBar.module.css';
import { AppBarProps } from './types';
import { classNames } from '@src/stories/helpers';

export const AppBar = ({ children, className }: AppBarProps) => {
  return (
    <header className={classNames(styles.header, className!)}>
      {children}
    </header>
  );
};
