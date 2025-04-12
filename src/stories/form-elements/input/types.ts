import React from 'react';
import { Icon, Size } from '@src/stories/types';

export type BaseInputProps<T> = {
  disabled?: boolean;
  isError?: boolean;
  name?: string;
  ref?: React.LegacyRef<T>;
  onChange?: React.ChangeEventHandler<T>;
  placeholder?: string;
  readOnly?: boolean;
  size?: Size;
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
  as?: 'input' | 'textarea';
  divider?: boolean;
  disabled?: boolean;
  children: React.ReactNode;
  endIcon?: Icon;
  isError?: boolean;
  isPending?: boolean;
  onClickEndIcon?: React.MouseEventHandler<HTMLButtonElement>;
  onClickStartIcon?: React.MouseEventHandler<HTMLButtonElement>;
  size?: Size;
  startIcon?: Icon;
  readOnly?: boolean;
  variant?: 'basic' | 'contained' | 'outlined' | 'underline';
};

export type MergeProps = InputProps | TextareaProps;
