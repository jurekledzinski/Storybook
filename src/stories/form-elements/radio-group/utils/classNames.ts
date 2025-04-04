import styles from '../RadioGroup.module.css';
import { classNames } from '@src/stories/helpers';
import { Color, Size, Orientation, Spacing } from '@src/stories/types';
import { Variant } from '../components';

export const getClassRadio = (
  color?: Color,
  disabled?: boolean,
  readOnly?: boolean,
  size?: Size,
  variant?: Variant
) => ({
  label: classNames(
    styles.label,
    styles[size ?? ''],
    disabled ? styles['disabled'] : '',
    readOnly ? styles['read-only'] : ''
  ),
  input: classNames(styles.input),
  radioCustom: classNames(
    styles.radioCustom,
    styles[color ?? ''],
    styles[size ?? ''],
    styles[variant ?? ''],
    readOnly ? styles['read-only'] : ''
  ),
});

export const getClassRadioGroup = (
  orientation?: Orientation,
  spacing?: Spacing,
  fullWidth?: boolean
) => {
  return classNames(
    styles.radioGroup,
    styles[orientation ?? ''],
    styles[spacing ?? ''],
    fullWidth ? styles.fullWidth : ''
  );
};
