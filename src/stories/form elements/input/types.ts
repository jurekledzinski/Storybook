import React from 'react';
import { Icon } from '../../types/ui';

// export type ClassName =
//   | ['startIcon']
//   | ['endIcon']
//   | ['startIcon', 'endIcon']
//   | ['endIcon', 'startIcon']
//   | string[];

export type BaseInputProps<T> = {
  disabled?: boolean;
  isError?: boolean;
  name?: string;
  ref?: React.LegacyRef<T>;
  onChange?: React.ChangeEventHandler<T>;
  placeholder?: string;
  readOnly?: boolean;
  size?: 'size-xs' | 'size-sm' | 'size-md' | 'size-lg';
  variant?: 'basic' | 'contained' | 'outlined' | 'underline';
  label: string;
};

export interface InputProps extends BaseInputProps<HTMLInputElement> {
  as?: 'input';
  type?: 'email' | 'number' | 'password' | 'text';
}

export interface TextareaProps extends BaseInputProps<HTMLTextAreaElement> {
  as?: 'textarea';
  cols?: number;
  rows?: number;
}

export type InputWrapperProps = {
  disabled?: boolean;
  children: React.ReactNode;
  endIcon?: Icon;
  isError?: boolean;
  isPending?: boolean;
  onClickEndIcon?: React.MouseEventHandler<HTMLSpanElement>;
  onClickStartIcon?: React.MouseEventHandler<HTMLSpanElement>;
  size?: 'size-xs' | 'size-sm' | 'size-md' | 'size-lg';
  startIcon?: Icon;
  readOnly?: boolean;
  variant?: 'basic' | 'contained' | 'outlined' | 'underline';
};
