import { Icon } from '@src/stories/types';
import { ButtonHTMLAttributes } from 'react';

export interface PaginationDotsProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: Icon;
}
