import { SelectProps } from '../types';

export type ContextSelect = SelectProps;

export type SelectProviderProps = {
  children: React.ReactNode;
  value: ContextSelect;
};
