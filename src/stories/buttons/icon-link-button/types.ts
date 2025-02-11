import { AnchorHTMLAttributes } from 'react';
import { IconElement, IconProps } from '../../graphics/icon/types';

export interface IconLinkButtonProps
  extends AnchorHTMLAttributes<HTMLAnchorElement> {
  border?: 'border-xs' | 'border-sm' | 'border-md' | 'border-lg' | 'border-xl';
  icon: IconElement<Omit<IconProps, 'icon'>>;
  isLoading?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  radius?:
    | 'radius-none'
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
}
