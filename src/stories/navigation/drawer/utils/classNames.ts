import { classNames, generateClassNames } from '@src/stories/helpers';
import styles from '../Drawer.module.css';
import { DrawerProps } from '../types';

type Params = Omit<DrawerProps, 'children'>;

export const getClassNamesDrawer = (params: Params) => {
  const { direction = 'right', open, variant } = params;

  return classNames(
    generateClassNames(styles, {
      [direction]: Boolean(direction),
      ['open']: Boolean(open),
      ['horizontal']: direction === 'bottom' || direction === 'top',
      ['vertical']: direction === 'left' || direction === 'right',
      [`${variant}`]: Boolean(variant),
    })
  );
};
