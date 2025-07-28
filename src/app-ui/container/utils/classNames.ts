import styles from '../Container.module.css';
import { generateClassNames } from '@src/stories/helpers';
import { GetClassesContainer } from './types';

export const getClassesContainer: GetClassesContainer = (padding) => {
  return generateClassNames(styles, {
    container: true,
    [`${padding}`]: Boolean(padding),
  });
};
