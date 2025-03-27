import { ButtonBaseContent } from './ButtonBaseContent';
import { ButtonProps, LinkButtonProps } from './types';
import { getClassButton } from './utils/classNames';
import { formatProps } from './utils/formatProps';

export const Button = ({
  iconStart,
  iconEnd,
  label,
  ...props
}: ButtonProps | LinkButtonProps) => {
  const { button, rest } = formatProps(props);
  const classElement = getClassButton(button);

  if ('href' in rest) {
    return (
      <a
        aria-label="Link button"
        role="link"
        className={classElement}
        {...(button.disabled || button.isLoading ? {} : { href: rest.href })}
        {...rest}
      >
        <ButtonBaseContent
          label={label}
          iconEnd={iconEnd}
          iconStart={iconStart}
          isLoading={button.isLoading}
          size={button.size}
        />
      </a>
    );
  }

  return (
    <button
      aria-label="Button"
      className={classElement}
      disabled={button.disabled || button.isLoading}
      {...rest}
    >
      <ButtonBaseContent
        label={label}
        iconEnd={iconEnd}
        iconStart={iconStart}
        isLoading={button.isLoading}
        size={button.size}
      />
    </button>
  );
};
