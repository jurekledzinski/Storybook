import type { IconProps as PropsIcon } from '@phosphor-icons/react';

export type IconElement<T> = React.ElementType<T>;

export interface IconProps extends PropsIcon {
  className?: string;
  schemaSize?: 'small' | 'medium' | 'large';
  icon: IconElement<Omit<IconProps, 'icon'>>;
}
