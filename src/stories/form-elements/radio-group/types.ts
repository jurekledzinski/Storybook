import { Orientation, Spacing } from '@src/stories/types';

export type RadioGroupProps = {
  spacing: Spacing;
  children?: React.ReactNode;
  fullWidth?: boolean;
  orientation?: Orientation;
};
