import { StackProps } from '../types';

type Params = Omit<StackProps, 'children'>;

export type StackClassNames = (params: Params) => string | undefined;
