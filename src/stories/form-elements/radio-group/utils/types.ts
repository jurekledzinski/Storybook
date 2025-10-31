import { Color, Size } from '@src/stories/types';
import { RadioGroupProps } from '../types';
import { VariantRadio } from '../components';

type ParamsRadio = {
  color?: Color;
  disabled?: boolean;
  readOnly?: boolean;
  size?: Size;
  variant?: VariantRadio;
};

type ParamsRadioGroup = Omit<RadioGroupProps, 'children'>;

export type RadioClassNames = (params: ParamsRadio) => {
  label: string;
  input: string;
  radio: string;
};
export type RadioGroupClassNames = (params: ParamsRadioGroup) => string;
