import { HTMLAttributes } from 'react';

export interface PaginationInfoProps extends HTMLAttributes<HTMLDivElement> {
  indexEnd?: number;
  indexStart?: number;
  totalAmount?: number;
}
