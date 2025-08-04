import stylesSpace from '@src/stories/styles/space.module.css';
import { ClassesBox } from './types';
import { classNames, generateClassNames } from '@src/stories/helpers';

export const getClassesBox: ClassesBox = (params) => {
  const { className, margin, padding } = params;

  return classNames(
    generateClassNames(stylesSpace, {
      [`${margin}`]: Boolean(margin),
      [`${padding}`]: Boolean(padding),
    }),
    className ?? ''
  );
};
