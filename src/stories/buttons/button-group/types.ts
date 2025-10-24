import { Aligment, Justify, Orientation, Spacing } from '@src/stories/types';

export type ButtonGroupProps = {
  children: React.ReactNode;
  aligment?: Aligment;
  className?: string;
  fullWidth?: boolean;
  justify?: Justify;
  orientation?: Orientation;
  spacing?: Spacing;
};
