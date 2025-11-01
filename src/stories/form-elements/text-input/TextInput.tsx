import { forwardRef } from 'react';
import { InputProps } from './types';
import {
  IconEnd,
  IconStart,
  IconStatus,
  Input,
  InputLoader,
  InputWrapper,
} from '../input';

export const TextInput = forwardRef<HTMLInputElement, InputProps>(
  ({ endIcon, isPending, startIcon, onClick, ...props }, ref) => {
    return (
      <InputWrapper
        {...props}
        as="input"
        isPending={isPending}
        isEndIcon={!!endIcon && Boolean(props.value)}
        isStartIcon={!!startIcon}
      >
        {startIcon ? <IconStart icon={startIcon[0]} /> : null}
        <Input {...props} ref={ref} />
        <InputLoader />
        <IconStatus />
        {endIcon ? <IconEnd icon={endIcon[0]} onClick={onClick} /> : null}
      </InputWrapper>
    );
  }
);

TextInput.displayName = 'TextInput';
