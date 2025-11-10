import { CSSProperties } from 'react';
import { DrawerProps } from '../types';

type DrawerParams = Omit<DrawerProps, 'children'>;

export type DrawerClassNames = (params: DrawerParams) => {
  drawer: string | undefined;
  inner: string | undefined;
};

type DrawerVarsParams = {
  gap?: number;
  top?: number;
  width?: number;
  zIndex?: number;
};

export type DrawerCSSVariables = (params: DrawerVarsParams) => CSSProperties;
