import { Aligment, Justify, Orientation, Spacing } from '@src/stories/types';

export type StackProps = {
  children: React.ReactNode;
  aligment?: Aligment;
  className?: string;
  fullWidth?: boolean;
  justify?: Justify;
  orientation?: Orientation;
  spacing?: Spacing;
  wrap?: 'wrap';
};
