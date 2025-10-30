import styles from '../Checkbox.module.css';
import { CheckboxClassNames, CheckboxLabelClassNames } from './types';
import { classNames, generateClassNames } from '@src/stories/helpers';

export const checkboxLabelClassNames: CheckboxLabelClassNames = ({
  classNameLabel,
  disabled,
  readOnly,
  size,
}) =>
  classNames(
    generateClassNames(styles, {
      label: true,
      disabled: Boolean(disabled),
      readOnly: Boolean(readOnly),
      [`${size}`]: Boolean(size),
    }),
    classNameLabel ?? ''
  );

export const checkboxClassNames: CheckboxClassNames = ({
  className,
  color,
  readOnly,
  size,
  variant,
}) =>
  classNames(
    generateClassNames(styles, {
      checkbox: true,
      readOnly: Boolean(readOnly),
      [`${color}`]: Boolean(color),
      [`${size}`]: Boolean(size),
      [`${variant}`]: Boolean(variant),
    }),
    className ?? ''
  );
