import { CSSProperties } from 'react';
import { ContainerProps } from '../types';

type Params = Omit<ContainerProps, 'as' | 'children'>;

export type ClassesContainer = (params: Params) => string;

export type GetInlineContainerStyles = (params: Params) => CSSProperties;
