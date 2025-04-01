import { ParentPopOverProps } from '../types';

export type Position = { x: number; y: number; h: number; w: number };

export interface PopOverContext<T>
  extends Omit<ParentPopOverProps<T>, 'children'> {
  isOpen?: boolean;
  onOpen?: (value: boolean) => void;
  parentRef: React.RefObject<HTMLDivElement> | null;
}

export type PopOverProviderProps<T> = {
  children: React.ReactNode;
  value: PopOverContext<T>;
};
