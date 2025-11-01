import { Icons, InputVariant, Size } from '@src/stories/types';
import { InputHTMLAttributes, MouseEventHandler } from 'react';

export interface TextareaProps
  extends Omit<InputHTMLAttributes<HTMLTextAreaElement>, 'size' | 'onClick'> {
  endIcon?: Icons;
  isError?: boolean;
  isPending?: boolean;
  label?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  size?: Size;
  startIcon?: Icons;
  variant?: InputVariant;
}
