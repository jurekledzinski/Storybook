import styles from './IconLinkButton.module.css';
import { classNames } from '../../helpers/classNames';
import { IconButtonBaseContent } from '../icon-button/IconButtonBaseContent';
import { IconLinkButtonProps } from './types';

export const IconLinkButton = ({
  href,
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
}: IconLinkButtonProps) => {
  const iconLinkButtonNames = classNames(
    styles.iconButton,
    styles[color as keyof typeof styles],
    styles[size as keyof typeof styles],
    styles[variant as keyof typeof styles],
    styles[radius as keyof typeof styles],
    styles[border as keyof typeof styles]
  );

  return (
    <a
      aria-label="Icon link button"
      role="link"
      {...(disabled ? {} : { href })}
      className={
        fullWidth
          ? disabled || isLoading
            ? classNames(iconLinkButtonNames, styles.disabled, styles.fullWidth)
            : classNames(iconLinkButtonNames, styles.fullWidth)
          : disabled || isLoading
          ? classNames(iconLinkButtonNames, styles.disabled)
          : classNames(iconLinkButtonNames)
      }
      {...(disabled ? {} : { onClick })}
      {...props}
    >
      <IconButtonBaseContent icon={icon} isLoading={isLoading} size={size} />
    </a>
  );
};
