import styles from '../ButtonGroup.module.css';
import { classNames } from '@src/stories/helpers';
import { Orientation, Spacing } from '@src/stories/types';

export const getClassButtonGroup = (
  orientation?: Orientation,
  spacing?: Spacing,
  fullWidth?: boolean
) => {
  return classNames(
    styles.buttonGroup,
    styles[orientation as keyof typeof styles],
    styles[spacing as keyof typeof styles],
    fullWidth ? styles.fullWidth : ''
  );
};
