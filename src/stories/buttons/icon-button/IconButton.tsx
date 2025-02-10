import styles from './IconButton.module.css';
import { classNames } from '../../helpers/classNames';
import { IconButtonBaseContent } from './IconButtonBaseContent';
import { IconButtonProps } from './types';

export const IconButton = ({
  icon,
  isLoading,
  onClick,
  size = 'medium',
  disabled,
  color,
  variant = 'contained',
  border = 'border-xs',
  fullWidth,
  radius = 'radius-none',
}: IconButtonProps) => {
  const iconButtonNames = classNames(
    styles.iconButton,
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
          ? classNames(iconButtonNames, styles.fullWidth)
          : classNames(iconButtonNames)
      }
      disabled={disabled || isLoading}
      onClick={onClick}
    >
      <IconButtonBaseContent icon={icon} isLoading={isLoading} size={size} />
    </button>
  );
};
