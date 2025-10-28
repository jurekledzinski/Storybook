import styles from '../Alert.module.css';
import { classNames, generateClassNames } from '@src/stories/helpers';
import {
  AlertClassNames,
  AlertIconClassNames,
  AlertMessageClassNames,
} from './types';

export const alertClassNames: AlertClassNames = (params) => {
  const { className, color, fullWidth, radius, variant = 'contained' } = params;

  return classNames(
    generateClassNames(styles, {
      alert: true,
      fullWidth: Boolean(fullWidth),
      [`${color}`]: Boolean(color),
      [`${radius}`]: Boolean(radius),
      [`${variant}`]: Boolean(variant),
    }),
    className ?? ''
  );
};

export const alertIconClassNames: AlertIconClassNames = (params) => {
  const { color, size = 'size-xs' } = params;

  return generateClassNames(styles, {
    icon: true,
    [`${color}`]: Boolean(color),
    [`${size}`]: Boolean(size),
  });
};

export const alertMessageClassNames: AlertMessageClassNames = (params) => {
  const { size = 'size-xs' } = params;

  return generateClassNames(styles, {
    message: true,
    [`${size}`]: Boolean(size),
  });
};
