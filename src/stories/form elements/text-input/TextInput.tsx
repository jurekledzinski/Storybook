import styles from './TextInput.module.css';
import { getInputClassNames, getInputProps } from './helpers/helpers';
import { Input } from '../input/Input';
import { InputWrapper } from '../input/components/InputWrapper';
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
          {...getInputProps(as, type)}
          className={getInputClassNames(
            !!startIcon,
            !!endIcon,
            isError,
            isPending
          )}
        />
      </InputWrapper>
    </div>
  );
};
