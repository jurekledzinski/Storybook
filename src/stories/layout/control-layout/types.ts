import { InputVariant, Size } from '@src/stories/types';

export interface ControlLayoutProps {
  as?: 'input' | 'textarea'; //to nie będzie mogło być musi być uniwersalne albo unions select jeszcze 'input' | 'textarea' | 'select'
  children?: React.ReactNode;
  className?: string;
  disabled?: boolean;
  isEndIcon?: boolean;
  isError?: boolean;
  isPending?: boolean;
  isStartIcon?: boolean;
  isStatus?: boolean;
  readOnly?: boolean;
  size?: Size;
  variant?: InputVariant;
}
