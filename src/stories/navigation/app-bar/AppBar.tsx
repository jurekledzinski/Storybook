import styles from './AppBar.module.css';
import { classNames } from '../../helpers/classNames';

type AppBarProps = {
  children: React.ReactNode;
  className?: string;
};

export const AppBar = ({ children, className }: AppBarProps) => {
  return (
    <header className={classNames(styles.header, className!)}>
      {children}
    </header>
  );
};
