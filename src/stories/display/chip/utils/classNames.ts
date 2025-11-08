import styles from '../Chip.module.css';
import { ChipClassNames } from './types';
import { classNames, generateClassNames } from '@src/stories/helpers';

export const chipClassNames: ChipClassNames = (params) => {
  const { className, color, onClick, size, variant } = params;

  return {
    chipWrapper: classNames(
      generateClassNames(styles, {
        chip: true,
        clickable: Boolean(onClick),
        [`${color}`]: Boolean(color),
        [`${size}`]: Boolean(size),
        [`${variant}`]: Boolean(variant),
      }),
      className ?? ''
    ),
    label: styles.label,
    delete: styles.delete,
  };
};
