import { HTMLAttributes } from 'react';

export interface MenuContainerProps extends HTMLAttributes<HTMLDivElement> {
  onSelectItem?: (id: string) => void;
}
