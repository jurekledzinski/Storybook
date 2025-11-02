import { forwardRef } from 'react';
import { InputProps } from './types';
import { IconEnd, IconStart, IconStatus, Input, InputLoader, InputWrapper } from '../input';

export const TextInput = forwardRef<HTMLInputElement, InputProps>(
  ({ endIcon, isPending, startIcon, onClick, ...props }, ref) => {
    return (
      <InputWrapper
        {...props}
        as="input"
        isPending={isPending}
        isEndIcon={!!endIcon || props.isError !== undefined}
        isStartIcon={!!startIcon}
      >
        {startIcon ? <IconStart icon={startIcon} /> : null}
        <Input {...props} ref={ref} />
        <InputLoader />
        <IconStatus />
        {endIcon ? <IconEnd icon={endIcon} onClick={onClick} /> : null}
      </InputWrapper>
    );
  }
);

TextInput.displayName = 'TextInput';
