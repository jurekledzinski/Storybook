import { forwardRef } from 'react';
import { Input } from '../input/Input';
import { InputWrapper } from '../input/components';
import { PasswordInputProps } from './types';
import { useState } from 'react';

export const PasswordInput = forwardRef<
  HTMLTextAreaElement | HTMLInputElement,
  PasswordInputProps
>(({ endIcon, startIcon, isPending, ...props }, ref) => {
  const [show, setShow] = useState(false);

  return (
    <InputWrapper
      dividerEnd={true}
      isPending={isPending}
      onClickEndIcon={(e) => {
        e.preventDefault();
        setShow((prev) => !prev);
      }}
      {...(endIcon && { endIcon: show ? endIcon[0] : endIcon[1] })}
      {...(startIcon && { startIcon: startIcon[0] })}
      {...props}
    >
      <Input ref={ref} type={show ? 'text' : 'password'} {...props} />
    </InputWrapper>
  );
});
