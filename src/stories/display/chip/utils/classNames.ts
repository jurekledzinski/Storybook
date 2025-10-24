import styles from '../Chip.module.css';
import { generateClassNames } from '@src/stories/helpers';
import { ChipClassNames } from './types';

export const chipClassNames: ChipClassNames = (params) => {
  const { color, onClick, radius, size, variant } = params;

  return {
    chipWrapper: generateClassNames(styles, {
      chip: true,
      clickable: Boolean(onClick),
      [`${color}`]: Boolean(color),
      [`${radius}`]: Boolean(radius),
      [`${size}`]: Boolean(size),
      [`${variant}`]: Boolean(variant),
    }),
    label: styles.label,
    delete: styles.delete,
  };
};
