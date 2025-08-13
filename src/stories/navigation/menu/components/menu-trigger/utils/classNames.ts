import styles from '../MenuTrigger.module.css';
import { generateClassNames } from '@src/stories/helpers';
import { GetClassNamesMenuTrigger } from '../types';

export const getClassNamesMenuTrigger: GetClassNamesMenuTrigger = (
  fullWidth
) => {
  return generateClassNames(styles, {
    [`full-width`]: Boolean(fullWidth),
    ['menu-trigger']: true,
  });
};
