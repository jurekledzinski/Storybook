import { Icons, Size } from '@src/stories/types';

export type TextInputProps = {
  as: 'input' | 'textarea';
  disabled?: boolean;
  readOnly?: boolean;
  endIcon?: Icons;
  isError?: boolean;
  isPending?: boolean;
  size?: Size;
  startIcon?: Icons;
  onClickEndIcon?: React.MouseEventHandler<HTMLSpanElement>;
  onClickStartIcon?: React.MouseEventHandler<HTMLSpanElement>;
  variant?: 'basic' | 'contained' | 'outlined' | 'underline';
  label: string;
  type: 'email' | 'number' | 'text';
};
