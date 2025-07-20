import React from 'react';
import { Size } from '@src/stories/types';

export type BaseInputProps<T> = {
  disabled?: boolean;
  isError?: boolean;
  name?: string;
  ref?: React.LegacyRef<T>;
  placeholder?: string;
  readOnly?: boolean;
  size?: Size;
  variant?: 'basic' | 'contained' | 'outlined' | 'underline';
  label?: string;
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

export type UnionElements = HTMLTextAreaElement | HTMLInputElement;

export type MergeProps = InputProps | TextareaProps;
