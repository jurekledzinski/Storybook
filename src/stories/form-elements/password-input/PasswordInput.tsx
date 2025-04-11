import styles from './PasswordInput.module.css';
import { forwardRef, Ref } from 'react';
import { Input } from '../input/Input';
import { InputWrapper } from '../input/components';
import { PasswordInputProps } from './types';
import { useState } from 'react';

export const PasswordInput = forwardRef<
  HTMLTextAreaElement | HTMLInputElement,
  PasswordInputProps
>(
  (
    { endIcon, startIcon, isPending, ...props },
    ref: Ref<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const [show, setShow] = useState(false);

    return (
      <div className={styles.passwordInput}>
        <InputWrapper
          divider={true}
          isPending={isPending}
          onClickEndIcon={() => setShow((prev) => !prev)}
          {...(endIcon && { endIcon: show ? endIcon[0] : endIcon[1] })}
          {...(startIcon && { startIcon: startIcon[0] })}
          {...props}
        >
          <Input ref={ref} type={show ? 'text' : 'password'} {...props} />
        </InputWrapper>
      </div>
    );
  }
);
