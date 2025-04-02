import { IconProp } from '@fortawesome/fontawesome-svg-core';

export type ButtonIconProps = {
  className?: string;
  icon: IconProp;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};
