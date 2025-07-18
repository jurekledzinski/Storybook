import styles from '../Icon.module.css';
import { classNames } from '@src/stories/helpers';
import { Color } from '@src/stories/types';

export const getClassIcon = (className?: string, color?: Color | 'info') => {
  return classNames(styles.icon, styles[color ?? ''], className ?? '');
};
