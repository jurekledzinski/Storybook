import { Margin, Orientation, Spacing } from '@src/stories/types';

export type ButtonGroupProps = {
  children: React.ReactNode;
  fullWidth?: boolean;
  orientation?: Orientation;
  spacing?: Spacing;
  marginTop?: Margin;
  marginBottom?: Margin;
};
