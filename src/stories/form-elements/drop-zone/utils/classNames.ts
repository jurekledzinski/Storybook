import styles from '../DropZone.module.css';
import { classNames, generateClassNames } from '@src/stories/helpers';
import { DropZoneClassNames } from './types';

export const dropZoneClassNames: DropZoneClassNames = (params) => {
  const { isEnter, className } = params;

  return {
    zone: classNames(
      generateClassNames(styles, { dropZone: true, enter: isEnter }),
      className ?? ''
    ),
    title: styles.title,
  };
};
