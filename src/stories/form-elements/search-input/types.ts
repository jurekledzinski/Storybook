import { Icon, InputVariant, Size } from '@src/stories/types';
import { InputHTMLAttributes, MouseEventHandler } from 'react';

type BasedProps = {
  endIcon?: Icon;
  isError?: boolean;
  isPending?: boolean;
  label?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  size?: Size;
  startIcon?: Icon;
  variant?: InputVariant;
};

interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'onClick'> {
  type: 'email' | 'number' | 'text';
}

export type SearchInputProps = BasedProps & InputProps;
