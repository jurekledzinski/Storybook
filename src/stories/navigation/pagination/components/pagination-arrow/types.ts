import { ButtonHTMLAttributes } from 'react';
import { Icon } from '@src/stories/types';
import { UiPagination } from '../../types';

export interface PaginationArrowProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'color'>,
    UiPagination {
  label?: Icon | string;
}
