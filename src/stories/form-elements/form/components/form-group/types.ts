import { HTMLAttributes } from 'react';
import { Orientation } from '@src/stories/types';

export interface FormGroupProps extends HTMLAttributes<HTMLDivElement> {
  orientation?: Orientation;
}
