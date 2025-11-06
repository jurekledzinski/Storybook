import styles from '../Arrow.module.css';
import { ArrowClassNames } from './types';
import { generateClassNames } from '@src/stories/helpers';

export const arrowClassNames: ArrowClassNames = (params) => {
  const { color = 'default', placement = 'top', size = 'size-xs' } = params;

  return generateClassNames(styles, {
    arrow: true,
    [`${color}`]: Boolean(color),
    [`${placement?.split(' ')[0]}`]: Boolean(placement),
    [`${placement?.replace(/\s/, '-')}`]: Boolean(placement),
    [`${size}`]: Boolean(size),
  });
};
