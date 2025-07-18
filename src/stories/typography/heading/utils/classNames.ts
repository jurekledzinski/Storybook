import styles from '../Heading.module.css';
import { classNames, generateClassNames } from '@src/stories/helpers';
import { FontWeightClass, HeadingProps } from '../types';

export const getClassNamesHeading = (
  className?: string,
  fw?: FontWeightClass,
  level?: HeadingProps['level']
) => {
  return classNames(
    generateClassNames(styles, {
      [`${fw}`]: Boolean(fw),
      [`h${level}`]: Boolean(level),
    }),
    className ?? ''
  );
};
