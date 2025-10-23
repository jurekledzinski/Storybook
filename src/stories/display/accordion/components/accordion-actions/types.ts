import { Icons } from '@src/stories/types';
import { MouseEventHandler } from 'react';

export type AccordionActionsProps = {
  onDelete?: MouseEventHandler<HTMLButtonElement>;
  icons?: Icons;
};
