import styles from './PasswordInput.module.css';
import { Input } from '../input/Input';
import { PasswordInputProps } from './types';
import { useState } from 'react';
import { InputWrapper } from '../input/components/InputWrapper';

export const PasswordInput = ({
  endIcon,
  startIcon,
  size,
  isError,
  isPending,
  ...props
}: PasswordInputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className={styles.passwordInput}>
      <InputWrapper
        endIcon={showPassword ? startIcon : endIcon}
        isError={isError}
        isPending={isPending}
        size={size}
        onClickEndIcon={() => setShowPassword((prev) => !prev)}
        {...props}
      >
        <Input
          isError={isError}
          type={showPassword ? 'text' : 'password'}
          size={size}
          className={['endIcon', 'noBorder']}
          {...props}
        />
      </InputWrapper>
    </div>
  );
};
