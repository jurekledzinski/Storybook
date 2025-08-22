import { GapToken } from '@src/stories/types';
import { HTMLAttributes } from 'react';

export interface FiledProps extends HTMLAttributes<HTMLFieldSetElement> {
  gap?: GapToken;
}
