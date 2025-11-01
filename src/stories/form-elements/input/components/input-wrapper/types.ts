import { InputVariant, Size } from '@src/stories/types';

export interface InputWrapperProps {
  as?: 'input' | 'textarea';
  className?: string;
  children?: React.ReactNode;
  disabled?: boolean;
  isEndIcon?: boolean;
  isError?: boolean;
  isPending?: boolean;
  isStartIcon?: boolean;
  readOnly?: boolean;
  size?: Size;
  variant?: InputVariant;
}
