import {
  Aligment,
  Justify,
  Orientation,
  Spacing,
  SpacingToken,
} from '@src/stories/types';

export interface ButtonGroupProps extends SpacingToken {
  children: React.ReactNode;
  aligment?: Aligment;
  className?: string;
  fullWidth?: boolean;
  justify?: Justify;
  orientation?: Orientation;
  spacing?: Spacing;
}
