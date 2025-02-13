import { IconElement, IconProps } from '../../graphics/icon/types';

export type IconBaseButtonProps = {
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
  size?: 'small' | 'medium' | 'large';
  color: 'primary' | 'secondary' | 'success' | 'negative' | 'warning';
  variant: 'contained' | 'outlined' | 'text';
};

export interface IconButtonProps
  extends IconBaseButtonProps,
    Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'color'> {}

export interface IconLinkButtonProps
  extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'color'>,
    IconBaseButtonProps {
  href: string;
  type?: never;
}

export type IconButtonBaseContentProps = {
  icon: IconElement<Omit<IconProps, 'icon'>>;
  isLoading?: boolean;
  size?: 'small' | 'medium' | 'large';
};
