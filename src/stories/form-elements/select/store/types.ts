import { SelectProps } from '../types';

export type ContextSelect = SelectProps & {
  innerValue?: string | string[];
  onSetValue?: (newValue: string) => void;
};

export type SelectProviderProps = {
  children: React.ReactNode;
  value: ContextSelect;
};
