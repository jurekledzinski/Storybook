import styles from '../DropZone.module.css';
import { classNames } from '@src/stories/helpers';

export const dropZoneClassNames = (isEnter: boolean) => ({
  zone: classNames(styles.dropZone, (isEnter && styles['enter']) || ''),
  title: styles.title,
});
