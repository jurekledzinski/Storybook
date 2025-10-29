import { Color } from '@src/stories/types';

type Params = {
  className?: string;
  color?: Color;
};

export type IconClassNames = (params: Params) => string;
