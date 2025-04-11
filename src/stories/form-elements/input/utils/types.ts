import { BaseInputProps } from '../types';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

type Variant = BaseInputProps<HTMLInputElement>['variant'];
type Size = BaseInputProps<HTMLInputElement>['size'];

export type BaseParmas = {
  variant: Variant;
  size: Size;
  isError?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  startIcon?: IconProp;
  endIcon?: IconProp;
  isPending?: boolean;
  divider?: boolean;
  as?: 'input' | 'textarea';
};

export type GetClassNamesInputWrapper = (params: BaseParmas) => {
  inputWrapper: string;
  startIcon: string;
  endIcon: string;
  statusIcon: string;
};

export type GetClassNamesInput = (
  params: Pick<BaseParmas, 'isError' | 'size' | 'variant' | 'disabled'>
) => {
  fieldset: string;
  input: string;
  legend: string;
  textarea: string;
};
