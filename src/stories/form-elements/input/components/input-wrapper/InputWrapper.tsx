import { forwardRef, Ref } from 'react';
import { inputWrapperClassNames } from '../../utils';
import { InputWrapperProps } from './types';
import { InputWrapperProvider } from '../../store';

export const InputWrapper = forwardRef<HTMLDivElement, InputWrapperProps>(
  ({ children, ...props }, ref: Ref<HTMLDivElement>) => {
    const classNames = inputWrapperClassNames(props);

    return (
      <InputWrapperProvider value={props}>
        <div {...props} className={classNames} ref={ref}>
          {children}
        </div>
      </InputWrapperProvider>
    );
  }
);

InputWrapper.displayName = 'InputWrapper';
