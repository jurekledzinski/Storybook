import { ReactNode } from 'react';
import { Size, SpacingToken } from '@src/stories/types';

export interface AccordionHeaderProps extends SpacingToken {
  children?: ReactNode;
  size?: Size;
}
