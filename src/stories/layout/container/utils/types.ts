import { ContainerProps } from '../types';

type Params = Pick<ContainerProps, 'margin' | 'maxWidth' | 'padding'>;

export type ClassesContainer = (params: Params) => string;
