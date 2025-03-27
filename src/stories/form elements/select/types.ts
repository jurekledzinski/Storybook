import { Color, Size, Variant } from '../../types/ui';

export type Option = { key: string; value: string };
type SelectVariant = Exclude<Variant, 'text'> | 'basic' | 'underline';

export type SelectProps<T> = {
  children?: React.ReactNode;
  color?: Color;
  gap?: number;
  items?: T[];
  isError?: boolean;
  label?: string;
  size?: Size;
  variant?: SelectVariant;
  value?: string;
  onChange?: (value: string) => void;
};
