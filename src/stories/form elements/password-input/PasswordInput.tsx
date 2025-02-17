import styles from './PasswordInput.module.css';
import { Input } from '../input/Input';
import { InputIcons } from '../input/InputIcons';
import { PasswordInputProps } from './types';
import { useState } from 'react';

export const PasswordInput = ({
  endIcon,
  startIcon,
  isPending,
  label,
  variant = 'basic',
}: PasswordInputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className={styles.passwordInput}>
      <Input
        label={label}
        type={showPassword ? 'text' : 'password'}
        variant={variant}
        className={['endIcon']}
      />

      <InputIcons
        endIcon={showPassword ? startIcon : endIcon}
        isPending={isPending}
        onClick={() => setShowPassword((prev) => !prev)}
        variant={variant}
      />
    </div>
  );
};
