import styles from './TextInput.module.css';
import { Input } from '../input/Input';
import { InputWrapper } from '../input/InputWrapper';
import { TextInputProps } from './types';

export const TextInput = ({
  as = 'input',
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
          as={as}
          label={label}
          size={size}
          variant={variant}
          {...(as === 'input' && { type })}
          {...(as === 'textarea' && { cols: 4, rows: 6 })}
          {...(classStartIcon
            ? { className: [classStartIcon, 'noBorder'] }
            : classEndIcon
            ? { className: [classEndIcon, 'noBorder'] }
            : classStartIcon && classEndIcon
            ? { className: [classStartIcon, classEndIcon, 'noBorder'] }
            : { className: ['noBorder'] })}
        />
      </InputWrapper>
    </div>
  );
};
