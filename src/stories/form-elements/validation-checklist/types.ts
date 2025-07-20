import { HTMLAttributes } from 'react';
import { Icons } from '@src/stories/types';

export interface ValidationChecklistProps
  extends HTMLAttributes<HTMLUListElement> {
  icons?: Icons;
}
