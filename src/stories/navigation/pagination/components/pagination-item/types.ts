import { ButtonHTMLAttributes } from 'react';
import { UiPagination } from '../../types';

export interface PaginationItemProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'color'>,
    UiPagination {
  isActive: boolean;
  page: number;
}
