import React from 'react';

export type BaseInputProps<T> = {
  name?: string;
  ref?: React.LegacyRef<T>;
  onChange?: React.ChangeEventHandler<T>;
  placeholder?: string;
  variant?: 'basic' | 'contained' | 'outlined' | 'underline';
  label: string;
};

type ClassName =
  | ['startIcon']
  | ['endIcon']
  | ['startIcon', 'endIcon']
  | ['endIcon', 'startIcon'];

export interface InputProps extends BaseInputProps<HTMLInputElement> {
  as?: 'input';
  className?: ClassName;
  size?: 'small' | 'medium' | 'large' | 'extra-large';
  type: 'email' | 'number' | 'password' | 'text';
}

export interface TextareaProps extends BaseInputProps<HTMLTextAreaElement> {
  as?: 'textarea';
  cols?: number;
  rows?: number;
}

export type InputIconsProps = {
  endIcon?: React.ReactNode;
  isError?: boolean;
  isPending?: boolean;
  onClick?: React.MouseEventHandler<HTMLSpanElement>;
  startIcon?: React.ReactNode;
  variant?: 'basic' | 'contained' | 'outlined' | 'underline';
};
