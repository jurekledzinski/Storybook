import { InputWrapperProps } from '../components';

export type ContextInputWrapper = Omit<InputWrapperProps, 'chidren'>;

export type InputWrapperProviderProps = {
  children: React.ReactNode;
  value: ContextInputWrapper;
};
