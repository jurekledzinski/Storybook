import { CSSProperties } from 'react';
import { ButtonGroupProps } from '../types';

type Params = Omit<ButtonGroupProps, 'children'>;

export type GetClassButtonGroup = (params: Params) => string;

export type GetInlineGroupStyles = (params: Params) => CSSProperties;
