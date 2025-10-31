import { Icons, InputVariant, Size } from '@src/stories/types';

export type PasswordInputProps = {
  disabled?: boolean;
  endIcon?: Icons;
  isError?: boolean;
  isPending?: boolean;
  label?: string;
  readOnly?: boolean;
  size?: Size;
  startIcon?: Icons;
  variant?: InputVariant;
};
