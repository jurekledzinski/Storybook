import { Color, Radius } from '@src/stories/types';

export type AlertProps = {
  children?: React.ReactNode;
  className?: string;
  color?: Color | 'info';
  fullWidth?: boolean;
  radius?: Radius;
  variant?: 'contained' | 'filled' | 'light' | 'outlined';
};
