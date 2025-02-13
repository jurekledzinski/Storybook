import styles from './Button.module.css';
import { ButtonBaseContent } from './ButtonBaseContent';
import { ButtonProps, LinkButtonProps } from './types';
import { classNames } from '../../helpers/classNames';

export const Button = ({ ...rest }: LinkButtonProps | ButtonProps) => {
  const {
    border = 'border-xs',
    color = 'primary',
    disabled,
    fullWidth,
    isLoading,
    radius = 'radius-none',
    size = 'medium',
    type = 'button',
    variant = 'contained',
    iconStart,
    iconEnd,
    onClick,
    label,
    ...props
  } = rest;
  const buttonClassNames = classNames(
    styles.button,
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
        aria-label="Link button"
        role="link"
        className={buttonClassNames}
        {...(disabled || isLoading ? {} : { href: props.href })}
      >
        <ButtonBaseContent
          label={label}
          iconEnd={iconEnd}
          iconStart={iconStart}
          isLoading={isLoading}
          size={size}
        />
      </a>
    );
  }

  return (
    <button
      className={buttonClassNames}
      {...props}
      disabled={disabled || isLoading}
      onClick={onClick as React.MouseEventHandler<HTMLButtonElement>}
      type={type}
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
