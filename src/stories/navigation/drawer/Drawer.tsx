import styles from './Drawer.module.css';
import { classNames } from '@src/stories/helpers';
import { DrawerProps } from './types';

export const Drawer = ({
  children,
  className,
  direction = 'top',
  open,
}: DrawerProps) => {
  return (
    <div
      className={
        direction === 'bottom'
          ? open
            ? classNames(
                styles.drawerHorizontal,
                styles.bottom,
                styles.open,
                className!
              )
            : classNames(styles.drawerHorizontal, styles.bottom, className!)
          : direction === 'left'
          ? open
            ? classNames(
                styles.drawerVertcial,
                styles.left,
                styles.open,
                className!
              )
            : classNames(styles.drawerVertcial, styles.left, className!)
          : direction === 'right'
          ? open
            ? classNames(
                styles.drawerVertcial,
                styles.right,
                styles.open,
                className!
              )
            : classNames(styles.drawerVertcial, styles.right, className!)
          : direction === 'top'
          ? open
            ? classNames(
                styles.drawerHorizontal,
                styles.top,
                styles.open,
                className!
              )
            : classNames(styles.drawerHorizontal, styles.top, className!)
          : classNames(styles.drawer, styles.top, className!)
      }
    >
      {children}
    </div>
  );
};
