import { IconElement, IconProps } from '../../graphics/icon/types';

export type BaseButtonProps = {
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
  size?: 'small' | 'medium' | 'large';
  color?: 'primary' | 'secondary' | 'success' | 'negative' | 'warning';
  type?: 'button' | 'reset' | 'submit';
  variant?: 'contained' | 'outlined' | 'text';
  label: string;
};

export interface ButtonProps
  extends BaseButtonProps,
    Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'color'> {}

export interface LinkButtonProps
  extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'color'>,
    BaseButtonProps {
  href: string;
  type?: never;
}

export type ButtonBaseContentProps = {
  isLoading?: boolean;
  iconStart?: IconElement<Omit<IconProps, 'icon'>>;
  iconEnd?: IconElement<Omit<IconProps, 'icon'>>;
  size?: 'small' | 'medium' | 'large';
  label: string;
};
