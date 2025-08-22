import styles from '../Field.module.css';
import stylesSpace from '@src/stories/styles/space.module.css';
import { ClassNamesField } from './types';
import { generateClassNames, classNames } from '@src/stories/helpers';

export const getClassNamesField: ClassNamesField = ({ className, gap }) => {
  const mergeStyles = { ...styles, ...stylesSpace };

  return classNames(
    generateClassNames(mergeStyles, {
      field: true,
      [`${gap}`]: Boolean(gap),
    }),
    className ?? ''
  );
};
