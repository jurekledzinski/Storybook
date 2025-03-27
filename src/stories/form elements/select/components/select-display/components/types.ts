import { Icon } from '../../../../../types/ui';

export type SelectDisplayWrapperProps = {
  disabled?: boolean;
  children: React.ReactNode;
  endIcon?: Icon;
  isError?: boolean;
  isPending?: boolean;
  onClickEndIcon?: React.MouseEventHandler<HTMLSpanElement>;
  onClickStartIcon?: React.MouseEventHandler<HTMLSpanElement>;
  size?: 'size-xs' | 'size-sm' | 'size-md' | 'size-lg';
  startIcon?: Icon;
  readOnly?: boolean;
  variant?: 'basic' | 'contained' | 'outlined' | 'underline';
};
