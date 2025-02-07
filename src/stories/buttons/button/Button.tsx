import { ButtonProps } from './types';
import styles from './Button.module.css';
import { classNames } from '../../helpers/classNames';

export const Button = ({
  border,
  color,
  disabled,
  fullWidth,
  radius,
  size,
  variant,
}: ButtonProps) => {
  const buttonClassNames = classNames(
    styles.button,
    styles[color as keyof typeof styles],
    styles[size as keyof typeof styles],
    styles[variant as keyof typeof styles],
    styles[radius as keyof typeof styles],
    styles[border as keyof typeof styles]
  );

  return (
    <button
      className={
        fullWidth
          ? classNames(buttonClassNames, styles.fullWidth)
          : classNames(buttonClassNames)
      }
      disabled={disabled}
    >
      Click button
    </button>
  );
};
