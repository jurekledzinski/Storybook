import { InputHTMLAttributes, TextareaHTMLAttributes } from 'react';
import { InputVariant, Size } from '@src/stories/types';

export type BaseInputProps = {
  isError?: boolean;
  label?: string;
  name?: string;
  placeholder?: string;
  size?: Size;
  variant?: InputVariant;
};

export type InputProps = {
  as?: 'input';
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> &
  BaseInputProps;

export type TextareaProps = {
  as?: 'textarea';
  cols?: number;
  rows?: number;
} & Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'size'> &
  BaseInputProps;

export type UnionInputs = HTMLTextAreaElement | HTMLInputElement;

export type MergeInputsProps = InputProps | TextareaProps;
