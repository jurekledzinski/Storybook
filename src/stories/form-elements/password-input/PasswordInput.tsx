import styles from './PasswordInput.module.css';
import { Input } from '../input/Input';
import { InputWrapper } from '../input/components';
import { PasswordInputProps } from './types';
import { useState } from 'react';

export const PasswordInput = ({
  endIcon,
  startIcon,
  isPending,
  ...props
}: PasswordInputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className={styles.passwordInput}>
      <InputWrapper
        isPending={isPending}
        onClickEndIcon={() => setShowPassword((prev) => !prev)}
        {...(endIcon && { endIcon: showPassword ? endIcon[0] : endIcon[1] })}
        {...(startIcon && { startIcon: startIcon[0] })}
        {...props}
      >
        <Input type={showPassword ? 'text' : 'password'} {...props} />
      </InputWrapper>
    </div>
  );
};
