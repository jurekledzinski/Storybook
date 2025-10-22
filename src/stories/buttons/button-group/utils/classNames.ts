import styles from '../ButtonGroup.module.css';
import stylesSpace from '@src/stories/styles/space.module.css';
import { ButtonGroupClassNames } from './types';
import {
  classNames,
  generateClassNames,
  spacingClasses,
} from '@src/stories/helpers';

export const buttonGroupClassNames: ButtonGroupClassNames = (params) => {
  const {
    aligment,
    className,
    justify,
    fullWidth,
    orientation,
    spacing,
    ...rest
  } = params;

  const spaceClasses = spacingClasses(rest);

  const mergeStyles = { ...styles, ...stylesSpace };

  return classNames(
    generateClassNames(mergeStyles, {
      'button-group': true,
      [`${aligment}`]: Boolean(aligment),
      [`full-width`]: Boolean(fullWidth),
      [`${justify}`]: Boolean(justify),
      [`${orientation}`]: Boolean(orientation),
      [`${spacing}`]: Boolean(spacing),
      ...spaceClasses,
    }),
    className ?? ''
  );
};
