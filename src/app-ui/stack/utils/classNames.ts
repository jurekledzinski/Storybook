import styles from '../Stack.module.css';
import { classNames, generateClassNames } from '@src/stories/helpers';
import { StackClassNames } from './types';

export const stackClassNames: StackClassNames = (params) => {
  const {
    aligment,
    className,
    justify,
    fullWidth,
    orientation,
    spacing,
    wrap,
  } = params;

  return classNames(
    generateClassNames(styles, {
      stack: true,
      [`${aligment}`]: Boolean(aligment),
      [`full-width`]: Boolean(fullWidth),
      [`${justify}`]: Boolean(justify),
      [`${orientation}`]: Boolean(orientation),
      [`${spacing}`]: Boolean(spacing),
      [`${wrap}`]: Boolean(wrap),
    }),
    className ?? ''
  );
};
