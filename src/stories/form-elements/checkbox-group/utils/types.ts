import { CheckboxGroupProps } from '../types';

type Params = Omit<CheckboxGroupProps, 'children'>;

export type CheckboxGroupClassNames = (params: Params) => string;
