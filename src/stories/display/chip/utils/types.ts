import { ChipProps } from '../types';

type PickUnions = 'color' | 'onClick' | 'radius' | 'size' | 'variant';

type Params = Pick<ChipProps, PickUnions>;

export type ChipClassNames = (params: Params) => {
  chipWrapper: string;
  delete: string;
  label: string;
};
