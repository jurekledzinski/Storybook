import { InputVariant, Size } from '@src/stories/types';

export interface InputWrapperProps {
  children?: React.ReactNode;
  as?: 'input' | 'textarea';
  disabled?: boolean;
  isError?: boolean;
  isPending?: boolean;
  readOnly?: boolean;
  size?: Size;
  variant?: InputVariant;
}
