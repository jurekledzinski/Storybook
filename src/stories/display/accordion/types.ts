import { Color, Variant } from '@src/stories/types';
import { MouseEventHandler } from 'react';

export type AccordionProps = {
  children: React.ReactNode;
  open: boolean;
  color?: Color;
  id?: string;
  onClick?: MouseEventHandler<HTMLDivElement>;
  variant?: Variant;
};
