import { ControlLayoutProps } from '@src/stories/layout';
import { SelectProps } from '../types';

type Params = Omit<ControlLayoutProps, 'children'>;
type PickKeys = 'isError' | 'size' | 'variant' | 'disabled';

export type SelectTriggerClassNames = (params: Pick<Params, PickKeys>) => string;

export type ParamsSelectOption = Omit<SelectProps, 'children' | 'onChange'> & {
  optionValue: string;
};

export type SelectOptionClassNames = (params: ParamsSelectOption) => string;
