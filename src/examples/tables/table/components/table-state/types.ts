import { HTMLAttributes } from 'react';

type TableState = 'empty' | 'error' | 'noResult';

export interface TableStateProps extends HTMLAttributes<HTMLDivElement> {
  state?: TableState;
}
