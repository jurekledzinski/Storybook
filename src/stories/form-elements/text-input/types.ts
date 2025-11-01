import { Icons, InputVariant, Size } from '@src/stories/types';
import { InputHTMLAttributes } from 'react';

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  endIcon?: Icons;
  isError?: boolean;
  isPending?: boolean;
  label?: string;
  size?: Size;
  startIcon?: Icons;
  variant?: InputVariant;
}
