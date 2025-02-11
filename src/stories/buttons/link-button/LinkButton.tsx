import styles from './LinkButton.module.css';
import stylesButton from '../button/Button.module.css';
import { ButtonBaseContent } from '../button/ButtonBaseContent';
import { classNames } from '../../helpers/classNames';
import { LinkButtonProps } from './types';

export const LinkButton = ({
  href,
  border = 'border-xs',
  color = 'primary',
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
  ...props
}: LinkButtonProps) => {
  const linkButtonClassNames = classNames(
    styles.linkButton,
    stylesButton[color as keyof typeof stylesButton],
    stylesButton[size as keyof typeof stylesButton],
    stylesButton[variant as keyof typeof stylesButton],
    styles[variant as keyof typeof styles],
    stylesButton[radius as keyof typeof stylesButton],
    stylesButton[border as keyof typeof stylesButton]
  );

  return (
    <a
      aria-label="Link button"
      role="link"
      {...(disabled ? {} : { href })}
      className={
        fullWidth
          ? disabled || isLoading
            ? classNames(
                linkButtonClassNames,
                styles.disabled,
                stylesButton.fullWidth
              )
            : classNames(linkButtonClassNames, stylesButton.fullWidth)
          : disabled || isLoading
          ? classNames(linkButtonClassNames, styles.disabled)
          : classNames(linkButtonClassNames)
      }
      {...(disabled ? {} : { onClick })}
      {...props}
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
};
