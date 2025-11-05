import styles from '../Drawer.module.css';
import { classNames, generateClassNames } from '@src/stories/helpers';
import { DrawerClassNames } from './types';

export const drawerClassNames: DrawerClassNames = (params) => {
  const { className, direction = 'right', open, variant } = params;

  return {
    drawer: classNames(
      generateClassNames(styles, {
        drawer: true,
        [direction]: Boolean(direction),
        [`${variant}`]: Boolean(variant),
        open: Boolean(open),
        horizontal: direction === 'bottom' || direction === 'top',
        vertical: direction === 'left' || direction === 'right',
      }),
      className ?? ''
    ),
    inner: styles.inner,
  };
};
