import { formatProps } from './utils/helpers';
import { getClassIconButton } from './utils/classNames';
import { IconButtonBaseContent } from './IconButtonBaseContent';
import { IconButtonProps, IconLinkButtonProps } from './types';

export const IconButton = ({
  icon,
  ...props
}: IconButtonProps | IconLinkButtonProps) => {
  const { button, rest } = formatProps(props);
  const iconButtonClassNames = getClassIconButton(button);

  if ('href' in rest) {
    return (
      <a
        aria-label="Icon link button"
        role="link"
        className={iconButtonClassNames}
        {...(button.disabled || button.isLoading ? {} : { href: rest.href })}
        {...rest}
      >
        <IconButtonBaseContent
          icon={icon}
          isLoading={button.isLoading}
          size={button.size}
        />
      </a>
    );
  }

  return (
    <button
      aria-label="Icon button"
      className={iconButtonClassNames}
      disabled={button.disabled || button.isLoading}
      {...rest}
    >
      <IconButtonBaseContent
        icon={icon}
        isLoading={button.isLoading}
        size={button.size}
      />
    </button>
  );
};
