import {
  Border,
  Color,
  Icons,
  Radius,
  Size,
  Variant,
} from '@src/stories/types';

export type IconBaseButtonProps = {
  icon: Icons;
  border?: Border;
  className?: string;
  color?: Color;
  contrast?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  isLoading?: boolean;
  radius?: Radius;
  size?: Size | 'size-xxs';
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
