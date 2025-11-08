import { ChipProps } from '../types';

type PickUnions = 'className' | 'color' | 'onClick' | 'size' | 'variant';

type Params = Pick<ChipProps, PickUnions>;

export type ChipClassNames = (params: Params) => {
  chipWrapper: string;
  delete: string;
  label: string;
};
