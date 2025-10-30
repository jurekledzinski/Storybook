import { Color, Size } from '@src/stories/types';
import { VariantCheckbox } from '../types';

type Params = {
  className?: string;
  classNameLabel?: string;
  color?: Color;
  disabled?: boolean;
  readOnly?: boolean;
  size?: Size;
  variant?: VariantCheckbox;
};

export type CheckboxClassNames = (params: Params) => string;
export type CheckboxLabelClassNames = (params: Params) => string;
