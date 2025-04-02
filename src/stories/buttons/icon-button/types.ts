import { Border, Color, Icon, Radius, Size, Variant } from '@src/stories/types';

export type IconBaseButtonProps = {
  border?: Border;
  contrast?: boolean;
  icon: Icon;
  isLoading?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  radius?: Radius;
  size?: Size;
  color?: Color;
  variant?: Variant;
};

export interface IconButtonProps
  extends IconBaseButtonProps,
    Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'color'> {}

export interface IconLinkButtonProps
  extends IconBaseButtonProps,
    Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'color'> {
  href: string;
  type?: never;
}
