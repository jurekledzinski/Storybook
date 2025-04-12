import { Icon } from '@src/stories/types';

export type ButtonIconProps = {
  className?: string;
  icon: Icon;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};
