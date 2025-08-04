import { MarginToken, PaddingToken } from '@src/stories/types';
import { HTMLAttributes } from 'react';

export interface BoxProps extends HTMLAttributes<HTMLDivElement> {
  padding?: PaddingToken;
  margin?: MarginToken;
}
