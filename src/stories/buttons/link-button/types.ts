import { AnchorHTMLAttributes } from 'react';
import { IconElement, IconProps } from '../../graphics/icon/types';

export interface LinkButtonProps
  extends AnchorHTMLAttributes<HTMLAnchorElement> {
  className?: string;
  border?: 'border-xs' | 'border-sm' | 'border-md' | 'border-lg' | 'border-xl';
  iconStart?: IconElement<Omit<IconProps, 'icon'>>;
  iconEnd?: IconElement<Omit<IconProps, 'icon'>>;
  isLoading?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  radius?:
    | 'radius-xs'
    | 'radius-sm'
    | 'radius-md'
    | 'radius-lg'
    | 'radius-xl'
    | 'radius-x2'
    | 'radius-x3'
    | 'radius-full';
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
  size?: 'small' | 'medium' | 'large';
  color: 'primary' | 'secondary' | 'success' | 'negative' | 'warning';
  variant: 'contained' | 'outlined' | 'text';
  label: string;
}
