import styles from './IconButton.module.css';
import { classNames } from '../../helpers/classNames';
import { IconButtonBaseContent } from './IconButtonBaseContent';
import { IconButtonProps, IconLinkButtonProps } from './types';

export const IconButton = ({
  icon,
  isLoading,
  onClick,
  size = 'medium',
  disabled,
  color = 'primary',
  variant = 'contained',
  border = 'border-xs',
  fullWidth,
  radius = 'radius-none',
  ...props
}: IconButtonProps | IconLinkButtonProps) => {
  const iconButtonNames = classNames(
    styles.iconButton,
    styles[color as keyof typeof styles],
    styles[size as keyof typeof styles],
    styles[variant as keyof typeof styles],
    styles[radius as keyof typeof styles],
    styles[border as keyof typeof styles],
    fullWidth ? styles.fullWidth : '',
    disabled || isLoading ? styles.disabled : ''
  );

  if ('href' in props) {
    return (
      <a
        aria-label="Icon link button"
        role="link"
        className={iconButtonNames}
        {...(disabled || isLoading ? {} : { href: props.href })}
      >
        <IconButtonBaseContent icon={icon} isLoading={isLoading} size={size} />
      </a>
    );
  }

  return (
    <button
      aria-label="Icon button"
      className={iconButtonNames}
      {...props}
      disabled={disabled || isLoading}
      onClick={onClick as React.MouseEventHandler<HTMLButtonElement>}
    >
      <IconButtonBaseContent icon={icon} isLoading={isLoading} size={size} />
    </button>
  );
};
