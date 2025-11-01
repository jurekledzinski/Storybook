import { forwardRef } from 'react';
import { Input, InputWrapper } from '@src/stories/form-elements/input';
import { InputProps } from './types';

export const TextInput = forwardRef<HTMLInputElement, InputProps>(
  ({ endIcon, isPending, startIcon, ...props }, ref) => {
    return (
      <InputWrapper
        {...props}
        as="input"
        isPending={isPending}
        isEndIcon={!!endIcon && Boolean(props.value)}
        isStartIcon={!!startIcon}
      >
        <Input {...props} ref={ref} />
      </InputWrapper>
    );
  }
);

TextInput.displayName = 'TextInput';
