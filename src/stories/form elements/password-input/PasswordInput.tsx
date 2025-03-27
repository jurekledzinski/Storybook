import styles from './PasswordInput.module.css';
import { Input } from '../input/Input';
import { InputWrapper } from '../input/components/InputWrapper';
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
        endIcon={showPassword ? startIcon : endIcon}
        isPending={isPending}
        onClickEndIcon={() => setShowPassword((prev) => !prev)}
        {...props}
      >
        <Input type={showPassword ? 'text' : 'password'} {...props} />
      </InputWrapper>
    </div>
  );
};
