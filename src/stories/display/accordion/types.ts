import { Color, Variant } from '@src/stories/types';

export type AccordionProps = {
  children: React.ReactNode;
  showCheckbox?: boolean;
  color?: Color;
  variant?: Variant;
};
