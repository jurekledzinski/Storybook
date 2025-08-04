import { Icons, InputVariant, Size } from '@src/stories/types';
import { InputHTMLAttributes } from 'react';

export type CommonProps = {
  endIcon?: Icons | string[];
  isError?: boolean;
  isPending?: boolean;
  size?: Size;
  startIcon?: Icons;
  onClickEndIcon?: React.MouseEventHandler<HTMLSpanElement>;
  onClickStartIcon?: React.MouseEventHandler<HTMLSpanElement>;
  variant?: InputVariant;
  label?: string;
};

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  as?: 'input';
  type: 'email' | 'number' | 'text';
}

export interface TextareaProps
  extends Omit<InputHTMLAttributes<HTMLTextAreaElement>, 'size'> {
  as?: 'textarea';
  type?: never;
  cols?: number;
  rows?: number;
}

export type TextInputProps = CommonProps & (InputProps | TextareaProps);
