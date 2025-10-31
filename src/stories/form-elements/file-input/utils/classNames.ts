import styles from '../components/file-input-container/FileInputContainer.module.css';
import { FileInputContainerClassNames } from './types';
import { generateClassNames } from '@src/stories/helpers';

export const fileInputContainerClassNames: FileInputContainerClassNames = (
  placement = 'bottom'
) => {
  return generateClassNames(styles, {
    container: true,
    [`${placement}`]: Boolean(placement),
  });
};
