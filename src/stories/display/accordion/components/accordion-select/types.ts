import { ChangeEventHandler } from 'react';
import { Size } from '@src/stories/types';

export type AccordionSelectProps = {
  onSelect?: ChangeEventHandler<HTMLInputElement>;
  size?: Size;
};
