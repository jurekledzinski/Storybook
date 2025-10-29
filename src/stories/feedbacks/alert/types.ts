import { Color, Radius, Orientation } from '@src/stories/types';

export type AlertProps = {
  children?: React.ReactNode;
  className?: string;
  color?: Color;
  fullWidth?: boolean;
  radius?: Radius;
  orientation?: Orientation;
  variant?: 'contained' | 'filled' | 'light' | 'outlined';
};
