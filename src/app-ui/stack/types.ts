import { Aligment, Justify, Orientation, Spacing } from '@src/stories/types';
import { HTMLAttributes } from 'react';

export interface StackProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  aligment?: Aligment;
  className?: string;
  fullWidth?: boolean;
  justify?: Justify;
  orientation?: Orientation;
  spacing?: Spacing;
  wrap?: 'wrap';
}
