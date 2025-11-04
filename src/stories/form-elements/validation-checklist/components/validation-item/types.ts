import { HTMLAttributes } from 'react';
import { Icons } from '@src/stories/types';

export interface ValidationItemProps extends HTMLAttributes<HTMLLIElement> {
  isValid: boolean;
  icons?: Icons;
}
