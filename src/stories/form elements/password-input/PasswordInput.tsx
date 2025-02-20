import styles from './PasswordInput.module.css';
import { Input } from '../input/Input';
import { PasswordInputProps } from './types';
import { useState } from 'react';
import { InputWrapper } from '../input/InputWrapper';

export const PasswordInput = ({
  endIcon,
  startIcon,
  size,
  isError,
  isPending,
  label,
  variant = 'basic',
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
        variant={variant}
      >
        <Input
          label={label}
          type={showPassword ? 'text' : 'password'}
          size={size}
          variant={variant}
          className={['endIcon']}
        />
      </InputWrapper>
    </div>
  );
};
