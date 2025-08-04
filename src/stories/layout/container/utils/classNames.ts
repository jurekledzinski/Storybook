import styles from '../Container.module.css';
import stylesSpace from '@src/stories/styles/space.module.css';
import { ClassesContainer } from './types';
import { generateClassNames } from '@src/stories/helpers';

export const getClassesContainer: ClassesContainer = (params) => {
  const { margin, maxWidth, padding } = params;

  const mergedClasses = { ...styles, ...stylesSpace };

  return generateClassNames(mergedClasses, {
    container: true,
    [`${margin}`]: Boolean(margin),
    [`${maxWidth}`]: Boolean(maxWidth),
    [`${padding}`]: Boolean(padding),
  });
};
