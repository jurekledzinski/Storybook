import { Orientation } from '@src/stories/types';

type Params = {
  className?: string;
  orientation?: Orientation;
};

export type FormClassNames = (params: Params) => string;
export type FormGroupClassNames = (params: Params) => string;
