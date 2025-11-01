import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { forwardRef, MouseEvent } from 'react';
import { Input } from '../input/Input';
import { PasswordInputProps } from './types';
import { useState } from 'react';
import {
  InputWrapper,
  IconEnd,
  InputLoader,
  IconStart,
} from '../input/components';

export const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
  ({ endIcon = [faEye, faEyeSlash], isPending, startIcon, ...props }, ref) => {
    const [show, setShow] = useState(false);

    const handleShowPassword = (e: MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      setShow((prev) => !prev);
    };

    return (
      <InputWrapper
        {...props}
        as="input"
        isPending={isPending}
        isEndIcon={!!endIcon}
        isStartIcon={!!startIcon}
      >
        {startIcon ? <IconStart icon={startIcon[0]} /> : null}
        <Input {...props} ref={ref} type={show ? 'text' : 'password'} />
        <InputLoader />
        <IconEnd
          icon={show ? endIcon[0] : endIcon[1]}
          onClick={handleShowPassword}
        />
      </InputWrapper>
    );
  }
);
