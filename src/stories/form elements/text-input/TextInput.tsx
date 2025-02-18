import styles from './TextInput.module.css';
import { Input } from '../input/Input';
import { InputIcons } from '../input/InputIcons';
import { TextInputProps } from './types';

export const TextInput = ({
  endIcon,
  isError,
  isPending,
  startIcon,
  size,
  label,
  variant = 'basic',
  type = 'text',
}: TextInputProps) => {
  const classStartIcon = startIcon ? 'startIcon' : undefined;
  const classEndIcon =
    endIcon || isError !== undefined || isPending ? 'endIcon' : undefined;

  return (
    <div className={styles.textInput}>
      <Input
        label={label}
        type={type}
        size={size}
        variant={variant}
        {...(startIcon || endIcon || isError !== undefined || isPending
          ? { className: [classStartIcon, classEndIcon].filter(Boolean) }
          : {})}
      />

      <InputIcons
        endIcon={endIcon}
        isError={isError}
        isPending={isPending}
        startIcon={startIcon}
        size={size}
        variant={variant}
      />
    </div>
  );
};

/* gdy undefined isError w prop InputIcons to schowa ikony error i check jeśli ich nie chcemy */
