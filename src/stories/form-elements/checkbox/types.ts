import { Color, Size } from '@src/stories/types';
import { InputHTMLAttributes } from 'react';

export type Variant = 'filled' | 'unfilled';

export interface CheckboxProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  chilren?: React.ReactNode;
  color?: Color;
  size?: Size;
  variant?: Variant;
}
