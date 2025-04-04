import styles from '../CheckboxGroup.module.css';
import { classNames } from '@src/stories/helpers';
import { Orientation, Spacing } from '@src/stories/types';

export const getClassCheckboxGroup = (
  orientation?: Orientation,
  spacing?: Spacing,
  fullWidth?: boolean
) => {
  return classNames(
    styles.checkboxGroup,
    styles[orientation ?? ''],
    styles[spacing ?? ''],
    fullWidth ? styles.fullWidth : ''
  );
};
