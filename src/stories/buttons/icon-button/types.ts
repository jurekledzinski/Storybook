import {
  Border,
  Color,
  Icons,
  Radius,
  Size,
  Variant,
} from '@src/stories/types';

export type IconBaseButtonProps = {
  border?: Border;
  className?: string;
  contrast?: boolean;
  icon: Icons;
  isLoading?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  radius?: Radius;
  size?: Size | 'size-xxs';
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
