import styles from '../Heading.module.css';
import { generateClassNames } from '@src/stories/helpers';
import { HeadingProps } from '../types';

export const getClassNamesHeading = (
  level?: HeadingProps['level'],
  className?: string
) => {
  return generateClassNames(styles, {
    [`h${level}`]: Boolean(level),
    [`${className}`]: Boolean(className),
  });
};
