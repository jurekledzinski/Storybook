import { Icons } from '@src/stories/types';
import { HTMLAttributes } from 'react';

export interface ValidationItemProps extends HTMLAttributes<HTMLLIElement> {
  isValid: boolean;
  icons?: Icons;
}
