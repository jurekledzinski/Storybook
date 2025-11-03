import { ButtonHTMLAttributes } from 'react';
import { Icon, Icons, InputVariant, Size } from '@src/stories/types';

export interface SelectTriggerProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'size'> {
  endIcon?: Icons;
  isError?: boolean;
  isPending?: boolean;
  label?: string;
  size?: Size;
  startIcon?: Icon;
  variant?: InputVariant;
}
