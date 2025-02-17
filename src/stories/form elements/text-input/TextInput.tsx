import styles from './TextInput.module.css';
import { Input } from '../input/Input';
import { InputIcons } from '../input/InputIcons';
import { TextInputProps } from './types';

export const TextInput = ({
  endIcon,
  isError,
  isPending,
  startIcon,
  label,
  variant = 'basic',
  type = 'text',
}: TextInputProps) => {
  const classStartIcon = startIcon ? 'startIcon' : undefined;
  const classEndIcon = endIcon || isError !== undefined ? 'endIcon' : undefined;

  return (
    <div className={styles.textInput}>
      <Input
        label={label}
        type={type}
        variant={variant}
        {...(startIcon || endIcon || isError !== undefined
          ? { className: [classStartIcon, classEndIcon].filter(Boolean) }
          : {})}
      />

      <InputIcons
        endIcon={endIcon}
        isError={isError}
        isPending={isPending}
        startIcon={startIcon}
        variant={variant}
      />
    </div>
  );
};
