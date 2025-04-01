import { Size, Variant } from '../../types/ui';

export type Option = { key: string; value: string };
type PopOverVariant = Exclude<Variant, 'text'> | 'basic' | 'underline';

export type ParentPopOverProps<T> = {
  children?: React.ReactNode;
  gap?: number;
  items?: T[];
  isError?: boolean;
  label?: string;
  size?: Size;
  variant?: PopOverVariant;
  value?: string;
  onChange?: (value: string) => void;
};

export type PopOverProps<T> = {
  children?: React.ReactNode | ((item: T) => React.ReactNode);
};
