import styles from './TextInput.module.css';
import { Input } from '../input/Input';
import { InputWrapper } from '../input/InputWrapper';
import { TextInputProps } from './types';

export const TextInput = ({
  endIcon,
  isError,
  isPending,
  startIcon,
  size,
  label,
  onClickEndIcon,
  onClickStartIcon,
  variant = 'basic',
  type = 'text',
}: TextInputProps) => {
  const classStartIcon = startIcon ? 'startIcon' : undefined;
  const classEndIcon =
    endIcon || isError !== undefined || isPending ? 'endIcon' : undefined;

  return (
    <div className={styles.textInput}>
      <InputWrapper
        endIcon={endIcon}
        isError={isError}
        isPending={isPending}
        size={size}
        startIcon={startIcon}
        onClickEndIcon={onClickEndIcon}
        onClickStartIcon={onClickStartIcon}
        variant={variant}
      >
        <Input
          label={label}
          type={type}
          size={size}
          variant={variant}
          {...(startIcon || endIcon || isError !== undefined || isPending
            ? { className: [classStartIcon, classEndIcon].filter(Boolean) }
            : {})}
        />
      </InputWrapper>
    </div>
  );
};
