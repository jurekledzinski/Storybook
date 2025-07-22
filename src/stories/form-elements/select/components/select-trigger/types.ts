import { Icons } from '@src/stories/types';
import { KeyboardEvent, MouseEvent } from 'react';

export type SelectTriggerProps = {
  endIcon: Icons;
};

export type Events = MouseEvent<HTMLElement> | KeyboardEvent<HTMLInputElement>;
