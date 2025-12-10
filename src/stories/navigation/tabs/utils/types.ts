import { Color, Variant } from '@src/stories/types';

export type Params = {
  color?: Color;
  id?: string;
  selectedKey?: string;
  variant?: Variant;
};

export type TabClassNames = (params: Params) => string;
