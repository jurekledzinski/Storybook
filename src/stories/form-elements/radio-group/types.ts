import { Margin, Orientation, Spacing } from '@src/stories/types';

export type RadioGroupProps = {
  children?: React.ReactNode;
  fullWidth?: boolean;
  marginTop?: Margin;
  marginBottom?: Margin;
  orientation?: Orientation;
  spacing: Spacing;
};
