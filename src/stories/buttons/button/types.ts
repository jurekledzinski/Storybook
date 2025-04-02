import { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';
import { Border, Color, Icon, Radius, Size, Variant } from '@src/stories/types';

export type BaseButtonProps = {
  label: string;
  border?: Border;
  iconStart?: Icon;
  iconEnd?: Icon;
  isLoading?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  radius?: Radius;
  size?: Size;
  color?: Color;
  variant?: Variant;
};

export interface ButtonProps
  extends BaseButtonProps,
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'color'> {}

export interface LinkButtonProps
  extends BaseButtonProps,
    Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'color'> {
  href: string;
  type?: never;
}
