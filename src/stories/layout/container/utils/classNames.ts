import styles from '../Container.module.css';
import { ClassesContainer } from './types';
import { generateClassNames } from '@src/stories/helpers';

export const getClassesContainer: ClassesContainer = (params) => {
  const { margin, maxWidth, padding } = params;

  return generateClassNames(styles, {
    container: true,
    [`${margin}`]: Boolean(margin),
    [`${maxWidth}`]: Boolean(maxWidth),
    [`${padding}`]: Boolean(padding),
  });
};
