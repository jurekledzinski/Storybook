import { ButtonHTMLAttributes } from 'react';

export interface MenuTriggerProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  fullWidth?: boolean;
  parentId?: string;
}

export type GetClassNamesMenuTrigger = (fullWidth?: boolean) => string;
