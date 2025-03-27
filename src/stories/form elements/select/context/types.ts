import { SelectProps } from '../types';

export type Position = { x: number; y: number; h: number; w: number };

export interface SelectContext<T> extends Omit<SelectProps<T>, 'children'> {
  position: Position;
  isOpen?: boolean;
  onOpen?: () => void;
}

export type SelectProviderProps<T> = {
  children: React.ReactNode;
  value: SelectContext<T>;
};
