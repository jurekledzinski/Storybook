import { FormHTMLAttributes } from 'react';
import { GapToken, Orientation } from '@src/stories/types';

export interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
  gap?: GapToken;
  orientation?: Orientation;
}
