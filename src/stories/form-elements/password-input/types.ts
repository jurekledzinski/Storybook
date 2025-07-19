import { Icons } from '@src/stories/types';

export type PasswordInputProps = {
  disabled?: boolean;
  readOnly?: boolean;
  endIcon?: Icons;
  isError?: boolean;
  isPending?: boolean;
  startIcon?: Icons;
  size?: 'size-xs' | 'size-sm' | 'size-md' | 'size-lg';
  variant?: 'basic' | 'contained' | 'outlined' | 'underline';
  label?: string;
};
