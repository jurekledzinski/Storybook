import { LinkButtonProps } from './types';
import styles from './LinkButton.module.css';
import stylesButton from '../button/Button.module.css';
import { classNames } from '../../helpers/classNames';
import { ButtonBaseContent } from '../button/ButtonBaseContent';

export const LinkButton = ({
  href,
  border = 'border-xs',
  color,
  disabled,
  fullWidth,
  isLoading,
  radius,
  size = 'medium',
  variant,
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
      href={href}
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
      onClick={onClick}
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
