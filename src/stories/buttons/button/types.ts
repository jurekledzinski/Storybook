import { IconElement, IconProps } from '../../graphics/icon/types';

export type ButtonProps = {
  border?: 'border-xs' | 'border-sm' | 'border-md' | 'border-lg' | 'border-xl';
  iconStart?: IconElement<Omit<IconProps, 'icon'>>;
  iconEnd?: IconElement<Omit<IconProps, 'icon'>>;
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
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  size?: 'small' | 'medium' | 'large';
  color: 'primary' | 'secondary' | 'success' | 'negative' | 'warning';
  variant: 'contained' | 'outlined' | 'text';
  label: string;
};

export type ButtonBaseContentProps = {
  isLoading?: boolean;
  iconStart?: IconElement<Omit<IconProps, 'icon'>>;
  iconEnd?: IconElement<Omit<IconProps, 'icon'>>;
  size?: 'small' | 'medium' | 'large';
  label: string;
};
