import styles from './Button.module.css';
import { ButtonBaseContent } from './ButtonBaseContent';
import { ButtonProps } from './types';
import { classNames } from '../../helpers/classNames';

export const Button = ({
  border = 'border-xs',
  color,
  disabled,
  fullWidth,
  isLoading,
  radius = 'radius-none',
  size = 'medium',
  variant = 'contained',
  iconStart,
  iconEnd,
  onClick,
  label,
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
      disabled={disabled || isLoading}
      onClick={onClick}
    >
      <ButtonBaseContent
        label={label}
        iconEnd={iconEnd}
        iconStart={iconStart}
        isLoading={isLoading}
        size={size}
      />
    </button>
  );
};
