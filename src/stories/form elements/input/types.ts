import React from 'react';

export type ClassName =
  | ['startIcon']
  | ['endIcon']
  | ['startIcon', 'endIcon']
  | ['endIcon', 'startIcon']
  | string[];

export type BaseInputProps<T> = {
  className?: ClassName;
  disabled?: boolean;
  isError?: boolean;
  name?: string;
  ref?: React.LegacyRef<T>;
  onChange?: React.ChangeEventHandler<T>;
  placeholder?: string;
  readOnly?: boolean;
  size?: 'small' | 'medium' | 'large' | 'extra-large';
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
  children: React.ReactNode;
  endIcon?: React.ReactNode;
  isError?: boolean;
  isPending?: boolean;
  onClickEndIcon?: React.MouseEventHandler<HTMLSpanElement>;
  onClickStartIcon?: React.MouseEventHandler<HTMLSpanElement>;
  size?: 'small' | 'medium' | 'large' | 'extra-large';
  startIcon?: React.ReactNode;
  variant?: 'basic' | 'contained' | 'outlined' | 'underline';
};
