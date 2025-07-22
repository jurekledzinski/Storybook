import { HTMLAttributes } from 'react';
import { Icon, Size } from '@src/stories/types';

export interface InputWrapperProps extends HTMLAttributes<HTMLDivElement> {
  as?: 'input' | 'textarea';
  divider?: boolean;
  disabled?: boolean;
  children: React.ReactNode;
  endIcon?: Icon;
  isError?: boolean;
  isPending?: boolean;
  statusVisible?: boolean;
  onClickEndIcon?: React.MouseEventHandler<HTMLButtonElement>;
  onClickStartIcon?: React.MouseEventHandler<HTMLButtonElement>;
  size?: Size;
  startIcon?: Icon;
  readOnly?: boolean;
  variant?: 'basic' | 'contained' | 'outlined' | 'underline';
}
