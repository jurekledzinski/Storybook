import { FormHTMLAttributes } from 'react';
import { Orientation } from '@src/stories/types';

export interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
  children?: React.ReactNode;
  orientation?: Orientation;
}
