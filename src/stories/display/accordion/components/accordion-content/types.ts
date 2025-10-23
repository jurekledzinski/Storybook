import { Size, SpacingToken } from '@src/stories/types';

export interface AccordionContentProps extends SpacingToken {
  children?: React.ReactNode;
  className?: string;
  size?: Size;
}
