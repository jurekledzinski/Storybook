import { Icon } from '../../types/ui';

export type PasswordInputProps = {
  disabled?: boolean;
  readOnly?: boolean;
  endIcon?: Icon;
  isError?: boolean;
  isPending?: boolean;
  startIcon?: Icon;
  size?: 'size-xs' | 'size-sm' | 'size-md' | 'size-lg';
  variant?: 'basic' | 'contained' | 'outlined' | 'underline';
  label: string;
};
