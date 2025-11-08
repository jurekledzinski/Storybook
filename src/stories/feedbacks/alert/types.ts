import { Color, Orientation } from '@src/stories/types';

export type AlertProps = {
  children?: React.ReactNode;
  className?: string;
  color?: Color;
  fullWidth?: boolean;
  orientation?: Orientation;
  variant?: 'contained' | 'filled' | 'light' | 'outlined';
};
