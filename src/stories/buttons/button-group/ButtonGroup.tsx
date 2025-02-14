import { classNames } from '../../helpers/classNames';
import { ButtonGroupProps } from './types';
import styles from './ButtonGroup.module.css';

export const ButtonGroup = ({
  children,
  fullWidth = false,
  orientation = 'row',
  spacing = 'none',
}: ButtonGroupProps) => {
  const buttonGroupClassNames = classNames(
    styles.buttonGroup,
    styles[orientation as keyof typeof styles],
    styles[spacing as keyof typeof styles],
    fullWidth ? styles.fullWidth : ''
  );

  return (
    <div
      aria-label="Button group"
      className={buttonGroupClassNames}
      role="group"
    >
      {children}
    </div>
  );
};
