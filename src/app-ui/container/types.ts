import { HTMLAttributes } from 'react';

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  padding?: 'padding-xs' | 'padding-sm' | 'padding-md' | 'padding-lg';
}
