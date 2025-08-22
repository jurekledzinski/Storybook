import { GapToken, Orientation } from '@src/stories/types';
import { HTMLAttributes } from 'react';

export interface FormGroupProps extends HTMLAttributes<HTMLDivElement> {
  gap?: GapToken;
  orientation?: Orientation;
}
