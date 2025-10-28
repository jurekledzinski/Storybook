import { Color, Radius } from '@src/stories/types';

export type AlertProps = {
  children?: React.ReactNode;
  className?: string;
  color?: Color;
  fullWidth?: boolean;
  radius?: Radius;
  variant?: 'contained' | 'filled' | 'light' | 'outlined';
};
