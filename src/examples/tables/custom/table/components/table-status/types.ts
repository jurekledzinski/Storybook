import { HTMLAttributes } from 'react';

export interface TableStatusProps extends HTMLAttributes<HTMLDivElement> {
  isLoading?: boolean;
  isEmpty?: boolean;
  noResults?: boolean;
}
