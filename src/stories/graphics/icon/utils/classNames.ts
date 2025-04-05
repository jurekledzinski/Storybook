import styles from '../Icon.module.css';
import { classNames } from '@src/stories/helpers';
import { Color } from '@src/stories/types';

export const getClassIcon = (color?: Color | 'info') => {
  return classNames(styles.icon, styles[color as keyof typeof styles]);
};
