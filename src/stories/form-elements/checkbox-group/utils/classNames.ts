import styles from '../CheckboxGroup.module.css';
import { CheckboxGroupClassNames } from './types';
import { classNames, generateClassNames } from '@src/stories/helpers';

export const checkboxGroupClassNames: CheckboxGroupClassNames = (params) => {
  const {
    className,
    fullWidth,
    orientation = 'column',
    spacing = 'normal',
  } = params;

  return classNames(
    generateClassNames(styles, {
      checkboxGroup: true,
      fullWidth: Boolean(fullWidth),
      [`${orientation}`]: Boolean(orientation),
      [`${spacing}`]: Boolean(spacing),
    }),
    className ?? ''
  );
};
